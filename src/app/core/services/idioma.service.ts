import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Idioma {
  idiomaAtual = signal<'pt' | 'en'>('pt');

  alternarIdioma(): void {
    this.idiomaAtual.update((idioma) =>
      idioma === 'pt' ? 'en' : 'pt'
    );
  }
}