import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Publicacoes } from './publicacoes';

describe('Publicacoes', () => {
  let component: Publicacoes;
  let fixture: ComponentFixture<Publicacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Publicacoes],
    }).compileComponents();

    fixture = TestBed.createComponent(Publicacoes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
