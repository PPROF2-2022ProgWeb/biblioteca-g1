
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {  FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:UserModel[];
  formBusquedaUsuario: FormGroup;
  constructor(private userServicio:UserService,private formBuilder: FormBuilder) { 
    this.formBusquedaUsuario = formBuilder.group({
      nombreUsuario: ['']
    });
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  public obtenerUsuarios(){
    if(this.formBusquedaUsuario.value.nombreUsuario==""){
      this.userServicio.obtenerListaUsuarios().subscribe((dato)=>{
      this.usuarios=dato;
    }
      )
    }else{
    this.userServicio.buscarUsuarios(this.formBusquedaUsuario.value.nombreUsuario).subscribe(
      (dato)=>{
        console.log(dato)
    //this.userServicio.obtenerListaUsuarios().subscribe(dato=>{
      
      //for (let index = 0; index < dato.length; index++) {
       // console.log(this.formBusquedaUsuario.value.nombreUsuario);
        //if(dato[index].name.includes(this.formBusquedaUsuario.value.nombreUsuario)){
         // this.usuarios.push(dato[index]);
       // }
      //}
      this.usuarios=dato;
    });
  }
  }

  eliminarUsuario(id:number){
    this.userServicio.eliminarUsuario(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerUsuarios();
    })
  }
}
