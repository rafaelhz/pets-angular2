import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Pet} from './pet';

@Injectable()
export class PetService {

  headers: Headers;
  server: string;

  constructor(public http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.server = 'http://localhost:8080/pets';
  }

  get(id) {
    return this.http.get(`${this.server}/${id}`)
      .map(response => response.json());
  }

  getAll() {
    return this.http.get(this.server)
      .map(response => response.json());
  }

  save(pet: Pet) {
    if (pet.id === undefined) {
      return this.create(pet);
    }
    return this.update(pet);
  }

  create(pet: Pet) {
    return this.http.post(
      this.server, JSON.stringify(pet), {headers: this.headers})
      .map(response => response.json());
  }

  update(pet: Pet) {
    return this.http.post(
      this.server, JSON.stringify(pet), {headers: this.headers})
      .map(response => response.json());
  }
}
