import { TestBed } from '@angular/core/testing';
import { Idioma } from './idioma.service';

describe('Idioma', () => {
  let service: Idioma;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Idioma);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });
});