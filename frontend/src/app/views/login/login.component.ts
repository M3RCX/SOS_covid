import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

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
}