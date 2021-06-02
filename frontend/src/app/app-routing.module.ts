import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { AgendamentoComponent } from './views/agendamento/agendamento.component'
import { CreateAgendamentoComponent } from  './components/agendamento/create-agendamento/create-agendamento.component'
import { LoginComponent } from './views/login/login.component'
import { CadastroComponent } from './views/cadastro/cadastro.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "agendamento",
  component: AgendamentoComponent
},{
  path: "login",
  component: LoginComponent

},{
  path: "agendamento/create",
  component: CreateAgendamentoComponent
},{
  path: "cadastro",
  component: CadastroComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
