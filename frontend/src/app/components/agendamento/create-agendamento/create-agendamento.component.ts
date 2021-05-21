import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-agendamento',
  templateUrl: './create-agendamento.component.html',
  styleUrls: ['./create-agendamento.component.css']
})
export class CreateAgendamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {
    console.log("fazendo algo");
  }

}
