import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuzzfizzrxjsComponent } from './buzzfizzrxjs.component';

describe('BuzzfizzrxjsComponent', () => {
  let component: BuzzfizzrxjsComponent;
  let fixture: ComponentFixture<BuzzfizzrxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuzzfizzrxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuzzfizzrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
