import { Router } from '@angular/router';
import { Login } from './Login.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as EventEmitter from 'events';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado : boolean = false;

  constructor(private snackBar: MatSnackBar, private router:Router) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg,'', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  mostrarMenuEmitter = new EventEmitter<boolean>();

  fazerLogin(login:Login){

    if (login.cpf === '123' && login.senha === '123'){
      this.usuarioAutenticado == true
      this.showMessage('Login feito com sucesso')
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/'])
      
    }else{
      this.usuarioAutenticado == false
      this.mostrarMenuEmitter.emit(false);

      this.showMessage('Login invalido tente novamente')
    }

  }

}
