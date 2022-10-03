import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookModel } from 'src/app/models/book.model';
import { UserModel } from 'src/app/models/user.model';
import { BookService } from 'src/app/services/book.service';
import { LendingService } from 'src/app/services/lending.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.css'],
})
export class DevolucionesComponent implements OnInit {
  formDev: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LendingService,
    private serviceL: BookService,
    private servicioUsuario: UserService,
    private servicioLibro: BookService
  ) {
    this.formDev = formBuilder.group({
      user_id: [, Validators.required],
      book_id: [, Validators.required],
    });
  }

  usuario: UserModel;
  libro: BookModel;

  Devolver() {
    if (this.formDev.valid) {
      let idUsuario = this.formDev.value.user_id;
      let idLibro = this.formDev.value.book_id;

      this.servicioUsuario.obtenerUsuarioPorId(idUsuario).subscribe(
        (user: UserModel) => {
          this.usuario = user;
          this.servicioLibro.obtenerLibroPorId(idLibro).subscribe(
            (book: BookModel) => {
              this.libro = book;
              this.service
                .validarPrestamo(
                  this.formDev.value.user_id,
                  this.formDev.value.book_id
                )
                .subscribe((dato) => {
                  console.log(dato);
                  dato.book.available = dato.book.available + 1;
                  this.serviceL
                    .actualizarLibroPorId(dato.book.id, dato.book)
                    .subscribe((dato2) => {
                      console.log(dato2);
                      this.service
                        .eliminarPrestamo(dato.id)
                        .subscribe((d) => console.log(d));
                      this.formDev.reset();  
                      Swal.fire('Exito', 'Devolucion exitosa', 'success');
                    });
                },(error) => Swal.fire('Error', error.error.message, 'error'));
                
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
  Devolver() {
    this.service
      .validarPrestamo(this.formDev.value.user_id, this.formDev.value.book_id)
      .subscribe((dato) => {
        console.log(dato);
        dato.book.available = dato.book.available + 1;
        this.serviceL
          .actualizarLibroPorId(dato.book.id, dato.book)
          .subscribe((dato2) => {
            console.log(dato2);
            this.service
              .eliminarPrestamo(dato.id)
              .subscribe((d) => console.log(d));
            this.formDev.reset();
          });
      });
  }
*/
  ngOnInit(): void {}
}
