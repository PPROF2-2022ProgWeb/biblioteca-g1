import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  libros: BookModel[];
  formLibro: FormGroup;

  constructor(
    private bookServicio: BookService,
    private formBuilder: FormBuilder
  ) {
    this.formLibro = formBuilder.group({
      title: [''],
    });
  }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  public obtenerLibros() {
    console.log(this.formLibro.value)
    if (this.formLibro.value.title == '') {
      this.bookServicio.obtenerListaLibros().subscribe((dato) => {
        this.libros = dato;
      })
    } else {
      this.bookServicio
        .buscarLibros(this.formLibro.value.title)
        .subscribe((dato) => {
          console.log(dato);
          this.libros = dato;
        });
    }
  }

  eliminarLibro(id: number) {
    this.bookServicio.eliminarLibro(id).subscribe((dato) => {
      console.log(dato);
      this.obtenerLibros();
    });
  }
}
