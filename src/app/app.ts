import { Component } from '@angular/core';
import { Cabecalho } from './shared/components/cabecalho/cabecalho';
import { Destaque } from './pages/inicio/destaque/destaque';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Destaque],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}