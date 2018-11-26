import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatPAgeComponent } from './flat-page.component';

describe('FlatPAgeComponent', () => {
  let component: FlatPAgeComponent;
  let fixture: ComponentFixture<FlatPAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatPAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
