import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URL='http://localhost:8080/api/books'
  URLSearch='http://localhost:8080/api/booksSearch'

  constructor(private http:HttpClient) { }

  obtenerListaLibros():Observable<BookModel[]>{
    return this.http.get<BookModel[]>(`${this.URL}`);
  }
  public eliminarLibro(id:number):Observable<Object>{
    return this.http.delete(`${this.URL}/${id}`); 
  }

  public agregarLibro(l:BookModel):Observable<Object>{
    return this.http.post(`${this.URL}`,l); 
  }

  public obtenerLibroPorId(id:number):Observable<BookModel>{
    return this.http.get<BookModel>(`${this.URL}/${id}`); 
  }
  public actualizarLibroPorId(id:number, book:BookModel):Observable<Object>{
    return this.http.put(`${this.URL}/${id}`,book); 
  }

  public buscarLibros(title:String):Observable<BookModel[]>{
    return this.http.get<BookModel[]>(`${this.URLSearch}/${title}`); 
  }

}
