import Component from '@glimmer/component';

export default class MarvelRouter extends Component {
  didInsertElement() {
    console.log("router!!!");
  }
  /* @tracked
  currentURL: string = '';

  @tracked
  port: string = '';

  @tracked
  current: string = '/';

  didInsertElement() {
    console.log("router now!!");
    this.currentURL = this.getCurrentURL();
  }
  getCurrentURL() {
    this.port = window.location.port;
    this.current = window.location.pathname;
    return window.location.hostname + this.port + this.current;
  } */
}
