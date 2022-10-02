import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from 'src/app/services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subirnuevolibro',
  templateUrl: './subirnuevolibro.component.html',
  styleUrls: ['./subirnuevolibro.component.css']
})
export class SubirnuevolibroComponent implements OnInit {
  formLibros:FormGroup;
  constructor(private formBuilder: FormBuilder,private servicio:BookService) { 
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
  }

  onSubmit(){
    this.guardarUsuario();
 }
 guardarUsuario(){
  if (this.formLibros.valid) {
  this.servicio.agregarLibro(this.formLibros.value).subscribe(
    dato=>{
      console.log(dato);
      this.formLibros.reset();
      Swal.fire('Exito', 'El Libro se ha registrado exitosamente', 'success');
    }
  )
  }else{
    Swal.fire(
      'Error',
      'No se puede guardar ya que faltan ingresar datos',
      'error'
    );
    
  }
}
}
