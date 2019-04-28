import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ParqueService {

  constructor(private Http: HttpClient,) { }

  private httpUrl="http://localhost:3000/api/users";


  getPaises() :Observable<any[]>{
    return this.Http.get<any[]>(this.httpUrl); //creamos una funcion va retornar un dato de typo aby devuelvame this.Http.get<any[]>(this.httpUrl); llamando una funcion que obtenga  y va ser de typo de any de la URL EN FORMATO json
  
  
  }
}
