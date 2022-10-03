import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';
import { LendingModel } from '../models/lending.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LendingService {
  URL='http://localhost:8080/api/lendings'
  
  constructor(private http:HttpClient) { }

  public agregarPrestamo(l:LendingModel):Observable<Object>{
    return this.http.post(`${this.URL}`,l); 
  }

  public validarPrestamo(codigoUsuario:number,codigoLibro:number):Observable<LendingModel>{
    return this.http.get<LendingModel>(`${this.URL}/${codigoUsuario}/${codigoLibro}`);
  }

  public eliminarPrestamo(id:number):Observable<Object>{
    return this.http.delete(`${this.URL}/${id}`); 
  }

  obtenerReporte():Observable<LendingModel[]>{
    return this.http.get<LendingModel[]>(`${this.URL}`);
  }
}
