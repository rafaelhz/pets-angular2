/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {CategoryList} from './category/category-list';
import {CategoryForm} from './category/category-form';
import {PetList} from './pet/pet-list';
import {PetForm} from './pet/pet-form';

/*
 * App Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ ],
  styles: [ require('./app.css') ],
  template: require('./app.html')
})
@RouteConfig([
  { path: '/',              name: 'Pets',           component: PetList,     useAsDefault: true },
  { path: '/pet',           name: 'Pet',            component: PetForm },
  { path: '/pet/:id',       name: 'PetEdit',        component: PetForm },
  { path: '/categories',    name: 'Categories',     component: CategoryList },
  { path: '/category',      name: 'Category',       component: CategoryForm },
  { path: '/category/:id',  name: 'CategoryEdit',   component: CategoryForm },

])
export class App {
  name = 'Pets App';
}
