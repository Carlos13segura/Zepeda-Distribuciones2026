import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LthProyectComponent } from './lth-proyect';

describe('LthProyectComponent', () => {
  let component: LthProyectComponent;
  let fixture: ComponentFixture<LthProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LthProyectComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LthProyectComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
