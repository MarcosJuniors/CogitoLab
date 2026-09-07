import { Component } from '@angular/core';
import { Cabecalho } from './shared/components/cabecalho/cabecalho';

@Component({
  selector: 'app-root',
  imports: [Cabecalho],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}