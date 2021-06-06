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

    adicionarCliente(clienteForm) {
      //console.log("esta me acionando")

      this.clienteService.adicionarCliente  (
        clienteForm.value.nome,
         clienteForm.value.cpf,
         clienteForm.value.email,
         clienteForm.value.telefone,
         clienteForm.value.cep,
         clienteForm.value.rua,
         clienteForm.value.bairro,
         clienteForm.value.numero,
         //clienteForm.value.complemento,
         clienteForm.value.senha
      )

      const nome = clienteForm.value.nome;
      const cpf = clienteForm.value.cpf;
      const email = clienteForm.value.email;
      const telefone = clienteForm.value.telefone;
      const cep = clienteForm.value.cep;
      const rua = clienteForm.value.rua;
      const bairro = clienteForm.value.bairro;
      //const complemento = clienteForm.value.complemento;
      const numero = clienteForm.value.numero;
      const senha = clienteForm.value.senha;


        console.log((`Nome: ${nome}, cpf: ${cpf}, Email: ${email}, Telefone: ${telefone},
        Cep: ${cep}, Rua: ${rua}, Bairro: ${bairro}, Numero: ${numero},
        Senha: ${senha}`))

        /*console.log((`Nome: ${nome}, cpf: ${cpf}, Email: ${email}, Telefone: ${telefone},
        Cep: ${cep}, Rua: ${rua}, Bairro: ${bairro}, Complemento: ${complemento}, Numero: ${numero},
        Senha: ${senha}`))*/

      /*adicionarCliente(clienteForm) {

        console.log(`Nome: ${nome}, cpf: ${cpf}, Email: ${email}, Telefone: ${telefone},
        Cep: ${cep}, Rua: ${rua}, Bairro: ${bairro}, Complemento: ${complemento}, Numero: ${numero},
        Senha: ${senha}`)}*/

      }

    }
