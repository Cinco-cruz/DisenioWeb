import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardproducto } from './cardproducto';

describe('Cardproducto', () => {
  let component: Cardproducto;
  let fixture: ComponentFixture<Cardproducto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardproducto],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardproducto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
