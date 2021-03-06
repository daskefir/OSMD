import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatPageComponent } from './flat-page.component';

describe('FlatPAgeComponent', () => {
  let component: FlatPageComponent;
  let fixture: ComponentFixture<FlatPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
