import { Component, OnInit } from '@angular/core';
import { PersonService } from "../shared/person.service";
import { BehaviorSubject, interval, Subject } from "rxjs";
import { Person } from "../shared/person.model";
import { flatMap, take, toArray } from "rxjs/operators";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  public persons$: Subject<Person[]> = new Subject<Person[]>();
  public displayedColumns: string[] = ['name', 'last_name', 'age'];
  public NUM_OF_ROWS: number = 0;
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private personService: PersonService) { }

  ngOnInit() {
    // this.persons$ = this.personService.getPerson().pipe(map(r => [r]));
  }

  getPersons() {
    this.persons$.next(null);
    this.isLoading$.next(true);

    interval(250).pipe(
      take(this.NUM_OF_ROWS),
      flatMap(() => this.personService.getPerson()),
      toArray())
      .subscribe(r => this.persons$.next(r),
        (err) => console.error(err),
        () => this.isLoading$.next(false))
  }

}
