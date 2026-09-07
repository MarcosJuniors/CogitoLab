import { Component, inject } from '@angular/core';
import { Idioma } from '../../../core/services/idioma.service';

@Component({
  selector: 'app-destaque',
  imports: [],
  templateUrl: './destaque.html',
  styleUrl: './destaque.css',
})
export class Destaque {
  private idiomaService = inject(Idioma);

  idiomaAtual = this.idiomaService.idiomaAtual;

  heroPesquisaLaboratorioUrl =
    '/images/hero-pesquisa-laboratorio.jpg';
}