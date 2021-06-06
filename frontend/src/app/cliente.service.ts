import { Component, Input, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // RxJS
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente.model';
import { Clinica } from './clinica.model'
import { Login } from './Login.model';
@Injectable( {providedIn: 'root'} )
export class ClienteService {
    @Input() clientes: Cliente[] = []
    private clinicas: Clinica[] = []
    constructor(private httpClient: HttpClient) { }

    logarCliente(cpf: string, senha: string): void {
        const cliente: Login = {
            cpf: cpf,
            senha: senha,
        };
        this.httpClient.post<{
            clientes: Cliente []
        }>('http://localhost:5000/login', cliente ).subscribe(
            (dados) => {
                this.clientes = dados.clientes;
                console.log(this.clientes);
                window.localStorage.setItem("localstorage", JSON.stringify(this.clientes))
            }
        )

       /* this.httpClient.get<{
        clientes: Cliente []
        }>('http://localhost:5000/login').subscribe(
            (dados) => {
                this.clientes = dados.clientes;
                console.log(this.clientes);
            }
        )*/
    }
    adicionarCliente (nome: string, cpf: string, email: string, telefone: string, cep: string, rua: string, bairro: string, numero: string,
      senha: string) {

      console.log(
        nome,
        cpf,
        email,
        telefone,
        cep,
        rua,
        bairro,
        numero,

        senha)
        const cliente: Cliente = {
            nome: nome,
            cpf: cpf,
            email: email,
            telefone: telefone,
            cep: cep,
            rua: rua,
            bairro: bairro,
            numero: numero,
            senha: senha
        }

        this.httpClient.post<{mensagem: string}>('http://localhost:1000/cliente-cadastrado', cliente)

    }

    adicionarClinica (nome: string, cnpj: number, email: string, telefone: number, cep: string, rua: string, bairro: string, numero: string, complemento: string, senha: string) {
        const clinica: Clinica = {
            nome: nome,
            cnpj: cnpj,
            email: email,
            telefone: telefone,
            cep: cep,
            rua: rua,
            bairro: bairro,
            numero: numero,
            complemento: complemento,
            senha: senha
        }

        this.httpClient.post<{mensagem: string}>('http://localhost:1000/cadastro-clinica', clinica)

    }
/*
      //Método para que outros componentes possam observar p 'listaClientesAtualizada'
      getListaClientesAtualizadoObservable() {
        return this.listaClientesAtualizada.asObservable()
    }
      //Método para que outros componentes possam observar p 'listaClinicasAtualizada'
      getListaClinicasAtualizadoObservable() {
        return this.listaClinicasAtualizada.asObservable()
    }
*/

}
