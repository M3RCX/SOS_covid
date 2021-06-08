import { Agendamento } from './create-agendamento/agendamento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { AgendamentoComponent } from 'src/app/views/agendamento/agendamento.component';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  baseUrl= "http://localhost:1200/agendamento"

  private agendamentos: Agendamento[] =[]

 

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}


  showMessage(msg: string): void{
      this.snackBar.open(msg,'', {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top"
      })
  }

  create(agendamento: Agendamento):Observable<Agendamento> {
    return this.http.post<Agendamento>(this.baseUrl, agendamento)
  }

// get thiago
// getAgendamentos(): void{
//     this.http.get<{
//       mensagem: string,
//       agendamentos:Agendamento [] 
//     }>("http://localhost:1200/agendamento").subscribe(
//       (dados) => {
//         this.agendamentos = dados.agendamentos;
//         this.listaAgendamento.next([...this.agendamentos]);

//       }
//     )
//   }

//   getListaAgendamentosObservable(){
//     return this.listaAgendamento.asObservable()
//   }



  // get mercante
  read():Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(this.baseUrl)
  }
   
}
