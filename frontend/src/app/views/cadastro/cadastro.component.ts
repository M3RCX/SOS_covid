import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../../../app/cliente.service';

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

  constructor (public clienteService: ClienteService) {

  }

  ngOnInit(): void {
  }

  adicionarCliente(form: NgForm) {

    this.clienteService.adicionarCliente(
      //Nome, fone e email são parâmetros eles estão dentro do parênteses
      form.value.nome,
      form.value.cpf,
      form.value.email,
      form.value.telefone,
      form.value.cep,
      form.value.rua,
      form.value.bairro,
      form.value.numero,
      form.value.senha
    );
  }

}
