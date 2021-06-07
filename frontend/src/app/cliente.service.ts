import { Component, Input, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; // RxJS
import { HttpClient } from '@angular/common/http';
import { Cliente } from './cliente.model';
import { Clinica } from './clinica.model'
import { Login } from './Login.model';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable( {providedIn: 'root'} )
export class ClienteService {
    @Input() clientes: Cliente[] = []
    private clinicas: Clinica[] = []

    cadastradoUrl= "http://localhost:1000/cliente-cadastrado"
    loginUrl = "http://localhost:5000/login"

    constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

    showMessage(msg: string): void{
        this.snackBar.open(msg,'', {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top"
        })
    }
//O observable é um via de mão dupla
    loginCliente(login: Login): Observable<Login> {
        return this.httpClient.post<Login>(this.loginUrl, login )
    }
    createCliente (cliente:Cliente):Observable<Cliente> {
        return this.httpClient.post<Cliente>(this.cadastradoUrl, cliente)
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

}
