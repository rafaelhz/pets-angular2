import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Category} from './category';
import {CategoryService} from './category-service';

@Component({
  selector: 'category-form',
  providers: [CategoryService],
  template: require('./category-form.html')
})
export class CategoryForm {

  category: Category;

  constructor(private params: RouteParams,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.category = new Category();
    let id = this.params.get('id');

    if (id) {
      this.categoryService.get(id)
        .subscribe(
          data => {
            this.category = data;
            this.category.id = Number(id);
          },
          error => console.log('Could not load the category.')
        );
    }
  }

  submit() {
    this
      .categoryService
      .save(this.category)
      .subscribe(
          data => this.router.navigate(['Categories']),
          error => console.log('Could not saved the category.'));
  }
}
