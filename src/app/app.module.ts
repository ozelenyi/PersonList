import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatSliderModule } from "@angular/material/slider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";

import { AppComponent } from './app.component';
import { GetCovidStatusPipe } from "./shared/helpers/covid.pipe";
import { PersonDetailsModalComponent } from "./person-details-modal/person-details-modal.component";
import { PersonListComponent } from "./person-list/person-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailsModalComponent,
    GetCovidStatusPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule
  ],
  entryComponents: [PersonDetailsModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
