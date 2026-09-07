import { Component } from '@angular/core';
import { Cabecalho } from './shared/components/cabecalho/cabecalho';
import { Destaque } from './pages/inicio/destaque/destaque';
import { Pesquisa } from './pages/pesquisa/pesquisa';
import { Projetos } from './pages/projetos/projetos';
import { Pessoas } from './pages/pessoas/pessoas';


@Component({
  selector: 'app-root',
  imports: [Cabecalho, Destaque, Pesquisa, Projetos, Pessoas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}