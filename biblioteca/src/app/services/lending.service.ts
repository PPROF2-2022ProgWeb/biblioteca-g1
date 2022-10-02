import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LendingModel } from '../models/lending.model';

@Injectable({
  providedIn: 'root'
})
export class LendingService {
  URL='http://localhost:8080/api/lendings'
  
  constructor(private http:HttpClient) { }

  public agregarPrestamo(l:LendingModel):Observable<Object>{
    return this.http.post(`${this.URL}`,l); 
  }
}
