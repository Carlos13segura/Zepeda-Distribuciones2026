import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LthDomicilio } from './lth-domicilio';

describe('LthDomicilio', () => {
  let component: LthDomicilio;
  let fixture: ComponentFixture<LthDomicilio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LthDomicilio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LthDomicilio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
