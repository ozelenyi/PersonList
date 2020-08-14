import { Component, Input } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

import { Person } from "../shared/person.model";

@Component({
  selector: 'app-person-details-modal',
  templateUrl: './person-details-modal.component.html',
  styleUrls: ['./person-details-modal.component.css']
})
export class PersonDetailsModalComponent {

  @Input() public person: Person;

  constructor(public matDialogRef: MatDialogRef<PersonDetailsModalComponent>) { }

  public close() {
    this.matDialogRef.close()
  }
}
