import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Subject, Subscription } from "rxjs";
import { finalize, flatMap, repeatWhen, take, takeUntil, toArray } from "rxjs/operators";

import { Person } from "../shared/person.model";
import { PersonService } from "../shared/services/person.service";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { PersonDetailsModalComponent } from "../person-details-modal/person-details-modal.component";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy {

  public persons$: Subject<Person[]> = new Subject<Person[]>();
  public displayedColumns: string[] = ['name', 'last_name', 'age', 'covid'];
  public NUM_OF_ROWS: number = 4;
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private subscriptions: Subscription[] = [];

  constructor(private personService: PersonService,
              private matDialog: MatDialog) { }

  public ngOnInit(): void {
    this.loadPersons();
    this.reloadPersonsWithInterval();
  }

  private reloadPersonsWithInterval(): void {
    this.subscriptions.push(
      interval(10000).pipe( // start 10s timer
        takeUntil(this.matDialog.afterOpened), // stop when modal is opened
        repeatWhen(() => this.matDialog.afterAllClosed), // restart when modal is closed,
      ).subscribe(() => this.loadPersons()))
  }

  public loadPersons(): void {
    this.persons$.next(null);
    this.isLoading$.next(true);

    this.subscriptions.push(
      interval(250).pipe( // ensure that every request will start after 250ms delay
        take(this.NUM_OF_ROWS),
        flatMap(() => this.personService.getPerson()),
        toArray(),
        finalize(() => this.isLoading$.next(false)),
      ).subscribe(r => this.persons$.next(r),
        (err) => console.error(err)))
  }

  public showDetails(value): MatDialogRef<PersonDetailsModalComponent> {
    const dialogRef = this.matDialog.open(PersonDetailsModalComponent, { panelClass: 'person-dialog' });
    dialogRef.componentInstance.person = value || {};

    return dialogRef;
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
