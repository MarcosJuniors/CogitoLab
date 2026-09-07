import { Component, inject, signal } from '@angular/core';
import { Idioma } from '../../../core/services/idioma.service';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {
  menuAberto = signal(false);

  private idiomaService = inject(Idioma);

  idiomaAtual = this.idiomaService.idiomaAtual;

  alternarIdioma(): void {
    this.idiomaService.alternarIdioma();
  }

  alternarMenu(): void {
    this.menuAberto.update((aberto) => !aberto);
  }
}