import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsliderComponent } from './imgslider.component';

describe('ImgsliderComponent', () => {
  let component: ImgsliderComponent;
  let fixture: ComponentFixture<ImgsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
