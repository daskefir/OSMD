import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCompanyTabComponent } from './info-company-tab.component';

describe('InfoCompanyTabComponent', () => {
  let component: InfoCompanyTabComponent;
  let fixture: ComponentFixture<InfoCompanyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCompanyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCompanyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
