import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomainComponent } from './infomain.component';

describe('InfomainComponent', () => {
  let component: InfomainComponent;
  let fixture: ComponentFixture<InfomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
