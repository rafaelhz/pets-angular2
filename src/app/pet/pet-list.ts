import {Component} from 'angular2/core';
import {PetService} from './pet-service';
import {Pet} from './pet';

@Component({
  selector: 'pet-list',
  providers: [PetService],
  template: require('./pet-list.html')
})
export class PetList {

  pets: Array<Pet> = [];

  constructor(private petService: PetService) {
  }

  ngOnInit() {
    this.petService.getAll().subscribe(
      data => this.pets = data,
      error => console.log('Could not load pets.')
    );
  }
}
