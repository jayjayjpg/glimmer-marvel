import { setupRenderingTest } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: marvel-router', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await this.render(hbs`<marvel-router />`);
    assert.equal(this.containerElement.textContent, 'Welcome to Glimmer!\n');
  });
});
