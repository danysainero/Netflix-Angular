import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfogeneralComponent } from './infogeneral.component';

describe('InfogeneralComponent', () => {
  let component: InfogeneralComponent;
  let fixture: ComponentFixture<InfogeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfogeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfogeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
