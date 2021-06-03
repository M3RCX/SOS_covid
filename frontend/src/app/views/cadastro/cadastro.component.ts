import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Onteste', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 5, color: 'lightgreen'},
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
