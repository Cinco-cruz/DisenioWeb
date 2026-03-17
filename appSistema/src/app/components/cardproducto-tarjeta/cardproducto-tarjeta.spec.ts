import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardproductoTarjeta } from './cardproducto-tarjeta';

describe('CardproductoTarjeta', () => {
  let component: CardproductoTarjeta;
  let fixture: ComponentFixture<CardproductoTarjeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardproductoTarjeta],
    }).compileComponents();

    fixture = TestBed.createComponent(CardproductoTarjeta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
