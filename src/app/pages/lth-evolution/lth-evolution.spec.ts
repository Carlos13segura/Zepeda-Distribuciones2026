import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LthEvolutionComponent } from './lth-evolution';

describe('LthEvolutionComponent', () => {
  let component: LthEvolutionComponent;
  let fixture: ComponentFixture<LthEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LthEvolutionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LthEvolutionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
