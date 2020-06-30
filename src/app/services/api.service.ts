import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  url = 'http://localhost:3000';

  submitForm(formBody: object): Observable<any> {
    return this.http.post(this.url, formBody);
  }
}
