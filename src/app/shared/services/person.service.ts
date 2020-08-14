import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Person } from "../person.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  getPerson(): Observable<Person> {
    return this.http.get<Person>(environment.apiUrl);
  }
}
