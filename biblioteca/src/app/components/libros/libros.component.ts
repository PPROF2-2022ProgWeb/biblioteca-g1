import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros:BookModel[];

  constructor(private bookServicio:BookService) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }
  private obtenerLibros(){
    this.bookServicio.obtenerListaLibros().subscribe(dato=>{
      this.libros=dato;
    });
  }

  eliminarLibro(id:number){
    this.bookServicio.eliminarLibro(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerLibros();
    })
  }
}
