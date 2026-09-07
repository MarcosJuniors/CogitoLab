import { Component } from '@angular/core';
import { RESEARCH_AREAS } from './pesquisa.data';

@Component({
  selector: 'app-pesquisa',
  imports: [],
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.css',
})
export class Pesquisa {
  researchAreas = RESEARCH_AREAS;
}