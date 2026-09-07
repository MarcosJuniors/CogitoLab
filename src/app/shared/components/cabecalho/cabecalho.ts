import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.css',
})
export class Cabecalho {
  menuAberto = signal(false);

  alternarMenu(): void {
    this.menuAberto.update(aberto => !aberto);
  }
}