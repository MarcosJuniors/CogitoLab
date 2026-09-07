import { Component } from '@angular/core';
import { PROJECTS } from './projetos.data';

@Component({
  selector: 'app-projetos',
  imports: [],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  projects = PROJECTS;
}