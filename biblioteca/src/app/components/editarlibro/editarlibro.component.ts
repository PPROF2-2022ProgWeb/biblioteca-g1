import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarlibro',
  templateUrl: './editarlibro.component.html',
  styleUrls: ['./editarlibro.component.css']
})
export class EditarlibroComponent implements OnInit {
  
  formLibros:FormGroup;
  book:BookModel;
  constructor(private servicio:BookService ,private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute) { 
    this.formLibros=formBuilder.group({
      id:['',Validators.required],
      title:['',Validators.required],
      date:['',Validators.required],
      author:['',Validators.required],
      category:['',Validators.required],
      edit:['',Validators.required],
      lang:['',Validators.required],
      description:['',Validators.required],
      stock:['',Validators.required],
      available:['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      let id=params["id"];
      this.servicio.obtenerLibroPorId(id).subscribe((book:BookModel)=>{
        this.book=book;
        this.formLibros.patchValue(book);
      })
    })
  }

  onSubmit() {
    this.actualizarLibro();
  }
  actualizarLibro() {
    if (this.formLibros.valid) {
      let id = this.formLibros.value.id;
      this.servicio.actualizarLibroPorId(id, this.formLibros.value)
        .subscribe((dato) => {
          console.log(dato);
          this.formLibros.reset();
          Swal.fire(
            'Exito',
            'El Libro se ha modificado exitosamente',
            'success'
          );
        });
    } else {
      Swal.fire(
        'Error',
        'No se puede modificar ya que faltan ingresar datos',
        'error'
      );
    }
  }
}
