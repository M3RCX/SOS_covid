import { AgendamentoService } from './../agendamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-agendamento',
  templateUrl: './create-agendamento.component.html',
  styleUrls: ['./create-agendamento.component.css']
})

export class CreateAgendamentoComponent implements OnInit {

  constructor(private agendamentoService: AgendamentoService,
    private router:Router) { }

  ngOnInit(): void {
    
  }


  createAgendamento(): void{
    this.agendamentoService.showMessage('Agendamento criado com sucesso')
  }

  cancelarAgendamento(): void{
    this.agendamentoService.showMessage('Agendamento cancelada com sucesso')
    this.router.navigate(['/agendamento'])
  }
}
