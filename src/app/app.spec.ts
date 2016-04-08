import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {WebpackState} from 'angular2-hmr';

// Load the implementations that should be tested
import {App} from './app';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    WebpackState,
    App
  ]);

  it('should have a name', inject([ App ], (app) => {
    expect(app.name).toEqual('Pets App');
  }));

});
