import { Component } from '@angular/core';
import { TEAM_MEMBERS } from './pessoas.data';

@Component({
  selector: 'app-pessoas',
  imports: [],
  templateUrl: './pessoas.html',
  styleUrl: './pessoas.css',
})
export class Pessoas {
  teamMembers = TEAM_MEMBERS;
}