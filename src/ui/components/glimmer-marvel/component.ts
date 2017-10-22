import Component, { tracked } from '@glimmer/component';

export interface SlideState {
  slides: {
    current: number,
    previous: number,
    next: number,
    currentURL: string,
  };
}

const KEY = {
  LEFT:  37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32
};

export default class GlimmerMarvel extends Component {
  @tracked state: SlideState;

  constructor(options: object) {
    super(options);

    this.state = {   
      slides: {
        current: 0,
        previous: -1,
        next: 1,
        currentURL: '',
      }
    };
  }

  @tracked('state')
  get currentSlide() {
    return this.state.slides.current;
  }

  didInsertElement() {
    console.log("reload it now now now so what now");
    window.addEventListener('keyup', this.handleKeyUp);
    this.slides = this.bounds.firstNode.querySelectorAll('marvel-slide');
    console.log(this.slides);
    this.switchSlides();
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.handleKeys(false, event);
  }

  handleKeys(value: Boolean, event: KeyboardEvent) {
    let slides = this.state.slides;
    if (event.keyCode === KEY.RIGHT   || event.keyCode === KEY.D) {
      if (slides.current === this.slides.length - 1) { return; }
      slides.current  = slides.next;
      slides.next = slides.next + 1; 
      slides.previous = slides.previous + 1;
    }
    if (event.keyCode === KEY.LEFT  || event.keyCode === KEY.A) {
      if (slides.current === 0) { return; } 
      slides.current = slides.previous;
      slides.next = slides.next - 1;
      slides.previous = slides.previous - 1;  
    }
    this.state = {
      ...this.state,
      slides
    };
    this.switchSlides();
  }

  switchSlides() {
    let slides = this.state.slides;
    if (slides.previous > -1) {
      this.slides[this.state.slides.previous].setAttribute('display-state', '');
      this.slides[this.state.slides.previous].style = '';
    }
    if (slides.next < this.slides.length) {
      this.slides[this.state.slides.next].setAttribute('display-state', '');
      this.slides[this.state.slides.next].style = '';
    }
    this.slides[this.state.slides.current].setAttribute('display-state', 'current');
    this.slides[this.state.slides.current].style.backgroundColor = '#dd77dd';
  }
}
