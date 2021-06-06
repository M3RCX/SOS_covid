import { Login } from './Login.model';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Login = new Login();

  constructor(private router: Router,
    private authService: AuthService) { }

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

  fazerLogin(){
    this.authService.fazerLogin(this.login);
  }
}