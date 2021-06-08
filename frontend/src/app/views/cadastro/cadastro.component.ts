import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../../app/cliente.service';
import { Router } from '@angular/router'
import { Cliente } from 'src/app/cliente.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})



export class CadastroComponent implements OnInit {

  nome : ''
  cpf : ''
  email : ''
  telefone : ''
  cep : ''
  rua : ''
  bairro : ''
  numero : ''
  senha : ''

  cliente: Cliente = {
    nome : '',
    cpf : '',
    email : '',
    telefone : '',
    cep : '',
    rua : '',
    bairro : '',
    numero : '',
    senha : ''
  }

  constructor (public clienteService: ClienteService,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  navigateToHome(): void{
    this.router.navigate(['/']);
  }

    adicionarCliente(): void {
      //console.log("esta me acionando")
      this.clienteService.createCliente(this.cliente).subscribe(() =>{
        this.clienteService.showMessage('Cadastro feito com sucesso')
        this.router.navigate(['/login'])
      })

    }
}