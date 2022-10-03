import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/models/book.model';
import { LendingModel } from 'src/app/models/lending.model';
import { UserModel } from 'src/app/models/user.model';
import { BookService } from 'src/app/services/book.service';
import { LendingService } from 'src/app/services/lending.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css'],
})
export class PrestamosComponent implements OnInit {
  formPrestamo: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private servicioUsuario: UserService,
    private servicioLibro: BookService,
    private servicioPrestamo: LendingService
  ) {
    this.formPrestamo = formBuilder.group({
      idUsuario: [, Validators.required],
      idLibro: [, Validators.required],
    });
  }

  usuario: UserModel;
  libro: BookModel;

  ngOnInit(): void {}
  fecha: Date = new Date();
  lend: LendingModel;
/*  onSubmit() {
    if (this.formPrestamo.valid) {
      this.ExisteUsuario();
      this.ExisteLibro();
      //this.lend=new LendingModel(1,this.fecha.toString(),this.sumarDias(this.fecha,15).toString(),this.libro.id, this.usuario.id);
      this.lend = new LendingModel();
      this.lend.date_out = this.fecha.toString();
      this.lend.date_return = this.sumarDias(this.fecha, 15).toString();
      //this.lend.book_id=this.formPrestamo.value.idLibro;
      //this.lend.user_id=this.formPrestamo.value.idUsuario;
      //this.lend.book=this.libro;
      //console.log(this.libro);
      this.lend.user = this.usuario;
      this.lend.book=this.libro;
    console.log(this.lend);

      //console.log(this.usuario);
      this.servicioPrestamo.agregarPrestamo(this.lend).subscribe((dato) => {
        this.formPrestamo.reset();
        Swal.fire(
          'Exito',
          'El Prestamo se ha registrado exitosamente',
          'success'
        );
      });
    } else {
      Swal.fire(
        'Error',
        'No se puede guardar ya que faltan ingresar datos',
        'error'
      );
    }
  }
*/
  sumarDias(fecha: Date, dias: number) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }



  AgregarPrestamo() {
    if (this.formPrestamo.valid) {
      let idUsuario = this.formPrestamo.value.idUsuario;
      let idLibro = this.formPrestamo.value.idLibro;

      this.servicioUsuario.obtenerUsuarioPorId(idUsuario).subscribe(
        (user: UserModel) => {
          this.usuario = user;
          this.servicioLibro.obtenerLibroPorId(idLibro).subscribe(
            (book: BookModel) => {
              this.libro = book;
              //Validar que no exista prestamo para ese libro
              this.lend = new LendingModel();
              this.lend.date_out = this.fecha.toLocaleDateString();
              this.lend.date_return = this.sumarDias(this.fecha, 15).toLocaleDateString();
              this.lend.user = this.usuario;
              this.lend.book = this.libro;
              //console.log(this.lend);
              if(this.lend.book.available>0){

              this.lend.book.available=this.lend.book.available-1;
              this.servicioPrestamo.agregarPrestamo(this.lend).subscribe((dato) => {
                this.servicioLibro.actualizarLibroPorId(this.lend.book.id,this.lend.book).subscribe(
                  (dato)=>{
                  //  console.log(dato);
                  }
                );
                this.formPrestamo.reset();
                Swal.fire(
                  'Exito',
                  'El Prestamo se ha registrado exitosamente',
                  'success'
                );
              },(error) => Swal.fire('Error', error.error.message, 'error'));
            }else{
              Swal.fire(
                'Error',
                'No se puede guardar ya que no se dispone el libro ' + this.lend.book.title,
                'error'
              );
            }
            },
            (error) => Swal.fire('Error', error.error.message, 'error')
          );
        },
        (error) => Swal.fire('Error', error.error.message, 'error')
      );
    } else {
      Swal.fire(
        'Error',
        'No se puede guardar ya que faltan ingresar datos',
        'error'
      );
    }
  }
/*
  ExisteUsuario() {
    let idUsuario = this.formPrestamo.value.idUsuario;

    this.servicioUsuario.obtenerUsuarioPorId(idUsuario).subscribe(
      (user: UserModel) => {
        this.usuario = user;
      },
      (error) => Swal.fire('Error', error.error.message, 'error')
    );
  }
  ExisteLibro() {
    let idLibro = this.formPrestamo.value.idLibro;

    this.servicioLibro.obtenerLibroPorId(idLibro).subscribe(
      (book: BookModel) => {
        this.libro = book;
      },
      (error) => Swal.fire('Error', error.error.message, 'error')
    );
  }*/
}
