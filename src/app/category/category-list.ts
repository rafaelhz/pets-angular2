import {Component} from 'angular2/core';
import {CategoryService} from './category-service';
import {Category} from './category';

@Component({
  selector: 'category-list',
  providers: [CategoryService],
  template: require('./category-list.html')
})
export class CategoryList {

  categories: Array<Category>;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      data => this.categories = data,
      error => console.log('Could not load categories.')
    );
  }
}
