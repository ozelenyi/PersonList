import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Person } from "./person.model";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPerson(): Observable<Person> {
    return this.http.get<Person>('https://v82tr0s6oa.execute-api.us-east-1.amazonaws.com/dev/ ');
  }
}
