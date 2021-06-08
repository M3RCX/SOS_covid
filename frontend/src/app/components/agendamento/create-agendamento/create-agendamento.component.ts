import { Agendamento } from './agendamento.model';
import { AgendamentoService } from './../agendamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-agendamento',
  templateUrl: './create-agendamento.component.html',
  styleUrls: ['./create-agendamento.component.css']
})

export class CreateAgendamentoComponent implements OnInit {

  agendamento: Agendamento = {
    
    name: 'Guilherme',
    date: '',
    street: 'Rua jose jannarelli 198'
    
  }

  constructor(private agendamentoService: AgendamentoService,
    private router:Router) { }

  ngOnInit(): void {
    
  }


  createAgendamento(): void{
    this.agendamentoService.create(this.agendamento).subscribe(() => {
      this.agendamentoService.showMessage('Agendamento criado com sucesso')
      this.router.navigate(['/agendamento'])
    })
    
  }

  cancelarAgendamento(): void{
    this.agendamentoService.showMessage('Agendamento cancelada com sucesso')
    this.router.navigate(['/agendamento'])
  }
}
