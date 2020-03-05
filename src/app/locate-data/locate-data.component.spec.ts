import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocateDataComponent } from './locate-data.component';

describe('LocateDataComponent', () => {
  let component: LocateDataComponent;
  let fixture: ComponentFixture<LocateDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
