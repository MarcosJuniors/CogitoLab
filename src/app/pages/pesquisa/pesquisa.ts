import { Component, inject } from '@angular/core';
import { RESEARCH_AREAS } from './pesquisa.data';
import { Idioma } from '../../core/services/idioma.service';

@Component({
  selector: 'app-pesquisa',
  imports: [],
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.css',
})
export class Pesquisa {

  private idiomaService = inject(Idioma);

  idiomaAtual = this.idiomaService.idiomaAtual;

  researchAreas = RESEARCH_AREAS;
}