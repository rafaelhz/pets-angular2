import {Component} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {PetService} from './pet-service';
import {Pet} from './pet';
import {CategoryService} from '../category/category-service';
import {Category} from '../category/category';

@Component({
  selector: 'pet-form',
  providers: [PetService, CategoryService],
  template: require('./pet-form.html')
})
export class PetForm {

  pet: Pet;
  category: Number;
  categories: Array<Category>;

  constructor(private params: RouteParams,
              private router: Router,
              private petService: PetService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.pet = new Pet();
    this.loadCategories();
    this.loadPet(this.params.get('id'));
  }

  loadPet(id) {
    if (id) {
      this.petService.get(id)
        .subscribe(
          data => {
            this.pet = data;
            this.pet.id = Number(id);
            this.category = this.pet.category.id;
          },
          error => console.log('Could not load the pet.')
        );
    }
  }

  loadCategories() {
    this.categoryService.getAll().subscribe(
      data => this.categories = <Array<Category>> data
    );
  }

  submit() {
    this.pet.category.id = this.category;

    this
      .petService
      .save(this.pet)
      .subscribe(
          data => this.router.navigate(['Pets']),
          error => console.log('Could not saved the pet.'));
  }
}
