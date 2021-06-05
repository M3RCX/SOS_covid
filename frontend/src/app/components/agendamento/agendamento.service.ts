import { Agendamento } from './create-agendamento/agendamento.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  baseUrl= "http://localhost:3001/agendamentos"

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

  read():Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(this.baseUrl)
  }
   
}
