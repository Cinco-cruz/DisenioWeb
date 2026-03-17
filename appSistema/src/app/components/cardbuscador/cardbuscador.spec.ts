import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardbuscador } from './cardbuscador';

describe('Cardbuscador', () => {
  let component: Cardbuscador;
  let fixture: ComponentFixture<Cardbuscador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardbuscador],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardbuscador);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
