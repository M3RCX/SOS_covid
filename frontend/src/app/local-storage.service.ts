import { Injectable, Input } from '@angular/core';
import { Cliente } from './cliente.model';
 

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  
  @Input() clientes: Cliente[] =[]

  cliente = this.clientes;

 

  set(Key: string, clientes = this.cliente): boolean {
    if (this.storage) {
      this.storage.setItem("localStorage", JSON.stringify(clientes));
      return true;
    }
    return false;
  }
}
    
