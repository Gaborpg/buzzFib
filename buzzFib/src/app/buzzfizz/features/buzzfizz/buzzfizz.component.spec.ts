import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzfizzComponent } from './buzzfizz.component';

describe('BuzzfizzComponent', () => {
  let component: BuzzfizzComponent;
  let fixture: ComponentFixture<BuzzfizzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuzzfizzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzfizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
