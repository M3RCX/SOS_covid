import { AgendamentoService } from './../agendamento.service';
import { Agendamento } from './../create-agendamento/agendamento.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cliente } from 'src/app/cliente.model';

@Component({
  selector: 'app-agendamento-read',
  templateUrl: './agendamento-read.component.html',
  styleUrls: ['./agendamento-read.component.css']
})
export class AgendamentoReadComponent implements OnInit {

  agendamentos: Agendamento[] = []
  

  displayedColumns = ['id', 'name', 'date', 'street', 'action']

  constructor(private agendamentoService: AgendamentoService) { }

  ngOnInit(): void {
    
    this.agendamentoService.read().subscribe(agendamentos => {
      this.agendamentos = agendamentos
      console.log(agendamentos)
    })
  }
}
