import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ClienteService } from '../../../app/cliente.service';
import { Router } from '@angular/router'
import {  Login } from 'src/app/Login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  login: Login = {
    cpf : '',
    senha : ''
  }
  

  constructor(public clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCadastro(): void {
    this.router.navigate(['/cadastro']);
  }
  
  hide = true;

  //validador de form
  cpfFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  senhaFormControl = new FormControl('', [
    Validators.required,
  ]);

  loginCliente(): void {
    console.log(this.login);
    this.clienteService.loginCliente(this.login).subscribe(() =>{
      this.clienteService.showMessage('Login feito com sucesso')
      this.router.navigate(['/login'])
    })

  }
}