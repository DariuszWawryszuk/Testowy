import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColectionComponent } from './add-colection.component';

describe('AddColectionComponent', () => {
  let component: AddColectionComponent;
  let fixture: ComponentFixture<AddColectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
