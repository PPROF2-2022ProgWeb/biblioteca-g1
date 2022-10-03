import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {

  formUsNuevo:FormGroup;
  user:UserModel;

  constructor(private servicio:UserService ,private formBuilder: FormBuilder) { 
    this.formUsNuevo=formBuilder.group({
      id:[0],
      name:['',Validators.required],
      last_name_p:['',Validators.required],
      last_name_m:['',Validators.required],
      domicilio:['',Validators.required],
      tel:['',Validators.required],
    });

  }


  onSubmit(){
    this.guardarUsuario();
 }
 guardarUsuario(){
  if (this.formUsNuevo.valid) {
  this.servicio.agregarUsuario(this.formUsNuevo.value).subscribe(
    dato=>{
      console.log(dato);
      this.formUsNuevo.reset();
      Swal.fire('Exito', 'El Usuario se ha registrado exitosamente', 'success');
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

  ngOnInit(): void {
  }

}
