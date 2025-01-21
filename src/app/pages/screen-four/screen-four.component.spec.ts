import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFourComponent } from './screen-four.component';

describe('ScreenTwoComponent', () => {
  let component: ScreenFourComponent;
  let fixture: ComponentFixture<ScreenFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
