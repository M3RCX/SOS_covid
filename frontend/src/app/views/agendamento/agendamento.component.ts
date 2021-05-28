import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

// tabela
export interface PeriodicElement {
  name: string;
  position: number;
  date: string;
  endereco: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Guilherme', date: '05/05/2021', endereco: 'rua jose jannarelli 198'},

];

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name', 'date', 'endereco'];
  dataSource = ELEMENT_DATA;

  navigateToCreateAgend(): void {
    this.router.navigate(['/agendamento/create']);
  }

}
