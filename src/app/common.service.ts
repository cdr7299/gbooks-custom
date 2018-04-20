import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Books } from './books'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

  public filter: any;
  private booksSearch = "https://www.googleapis.com/books/v1/volumes?q="
  private bookById = "https://www.googleapis.com/books/v1/volumes/"
  private key = '&key=AIzaSyBUxUtTnHcanVvMf7R4CRl6SIoXqbLCbTQ'
  constructor(
    private http: HttpClient
  ) { }

  getBooks(data, filter): Observable<any> {
    // return of(HEROES); 
    // console.log("Hello")
    // console.log(filter);

    if (filter == 0) {
      let temp = this.booksSearch + data + this.key;
      let response = this.http.get(temp)
        .map((response: Response) => response);

      return response;
    }
    else {
      let temp = this.booksSearch + '+inauthor:' + data + this.key;
      let response = this.http.get(temp)
        .map((response: Response) => response);
      return response;
    }

  }

  getBookById(data): Observable<any> {

    let temp = this.bookById + data + '?' + this.key;
    let response = this.http.get(temp)
      .map((response: Response) => response);
    // console.log(response);

    return response;

  }

}
