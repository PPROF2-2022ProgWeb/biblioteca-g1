import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarusuario',
  templateUrl: './editarusuario.component.html',
  styleUrls: ['./editarusuario.component.css']
})
export class EditarusuarioComponent implements OnInit {

  formUsNuevo:FormGroup;
  user:UserModel;
  constructor(private servicio:UserService ,private formBuilder: FormBuilder,private activatedRoute:ActivatedRoute) { 
    this.formUsNuevo=formBuilder.group({
      id:[0],
      name:['',Validators.required],
      last_name_p:['',Validators.required],
      last_name_m:['',Validators.required],
      domicilio:['',Validators.required],
      tel:['',Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      let id=params["id"];
      this.servicio.obtenerUsuarioPorId(id).subscribe((user:UserModel)=>{
        this.user=user;
        this.formUsNuevo.patchValue(user);
      })
    })
  }
  onSubmit(){
    this.actualizarUsuario();
 }
 actualizarUsuario(){
  if (this.formUsNuevo.valid) {
   
    let id=this.formUsNuevo.value.id
    this.servicio.actualizarUsuarioPorId(id,this.formUsNuevo.value).subscribe(
      dato=>{
        console.log(dato);
        this.formUsNuevo.reset();
        Swal.fire('Exito', 'El Usuario se ha modificado exitosamente', 'success');
      }
    )
    }else{
      Swal.fire(
        'Error',
        'No se puede modificar ya que faltan ingresar datos',
        'error'
      );
    }
}
}
