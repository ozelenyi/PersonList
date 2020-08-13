import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { personListComponent } from './person-list.component';

describe('personListComponent', () => {
  let component: personListComponent;
  let fixture: ComponentFixture<personListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ personListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(personListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
