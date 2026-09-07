import { Component } from '@angular/core';
import { Cabecalho } from './shared/components/cabecalho/cabecalho';
import { Destaque } from './pages/inicio/destaque/destaque';
import { Pesquisa } from './pages/pesquisa/pesquisa';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Destaque, Pesquisa],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}