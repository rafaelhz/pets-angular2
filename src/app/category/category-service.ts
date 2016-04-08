import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Category} from './category';

@Injectable()
export class CategoryService {

  headers: Headers;
  server: string;

  constructor(public http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.server = 'http://localhost:8080/categories';
  }

  get(id) {
    return this.http.get(`${this.server}/${id}`)
      .map(response => response.json());
  }

  getAll() {
    return this.http.get(this.server)
      .map(response => response.json());
  }

  save(category: Category) {
    if (category.id === undefined) {
      return this.create(category);
    }
    return this.update(category);
  }

  create(category: Category) {
    return this.http.post(
      this.server, JSON.stringify(category), {headers: this.headers})
      .map(response => response.json());
  }

  update(category: Category) {
    return this.http.post(
      this.server, JSON.stringify(category), {headers: this.headers})
      .map(response => response.json());
  }
}
