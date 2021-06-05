import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../../app/cliente.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

    nome: string = ''
    cpf: string = ''
    email: string = ''
    telefone: string = ''
    cep: string = ''
    rua: string = ''
    bairro: string = ''
    numero: string = ''
    senha: string = ''
    complemento: string = ''

    

  constructor (public clienteService: ClienteService,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  navigateToHome(): void{
    this.router.navigate(['/']);
  }
 
    
    adicionarCliente(form: NgForm) {
      var formCpf = form.value.cpf.replace(/[^\d]+/g,'')
      var formCep = form.value.cep.replace(/[^\d]+/g,'')
      var formTel = form.value.telefone.replace(/[^\d]+/g,'')
      console.log("esta me acionando")
      this.clienteService.adicionarCliente(
        //Nome, fone e email são parâmetros eles estão dentro do parênteses
        form.value.nome,
        formCpf,
        form.value.email,
        form.value.telefone,
        form.value.cep,
        form.value.rua,
        form.value.bairro,
        form.value.numero,
        form.value.complemento,
        form.value.senha
        );
        console.log(formCpf, formCep, formTel)
      }
  }
