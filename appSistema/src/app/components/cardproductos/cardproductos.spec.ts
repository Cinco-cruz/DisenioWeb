import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardproductos } from './cardproductos';

describe('Cardproductos', () => {
  let component: Cardproductos;
  let fixture: ComponentFixture<Cardproductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardproductos],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardproductos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
