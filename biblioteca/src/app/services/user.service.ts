import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  URL='http://localhost:8080/api/users'
  URLSearch='http://localhost:8080/api/usersSearch'

  constructor(private http:HttpClient) { }

  obtenerListaUsuarios():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.URL}`);
  }
  
  public obtenerUsuarioPorId(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.URL}/${id}`); 
  }
  public actualizarUsuarioPorId(id:number, user:UserModel):Observable<Object>{
    return this.http.put(`${this.URL}/${id}`,user); 
  }
  public agregarUsuario(us:UserModel):Observable<Object>{
    return this.http.post(`${this.URL}`,us); 
  }
  public eliminarUsuario(id:number):Observable<Object>{
    return this.http.delete(`${this.URL}/${id}`); 
  }

  public buscarUsuarios(name:String):Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.URLSearch}/${name}`); 
  }

}
