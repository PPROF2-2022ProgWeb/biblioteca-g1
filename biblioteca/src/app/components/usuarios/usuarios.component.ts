import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:UserModel[];

  constructor(private userServicio:UserService) { 

  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.userServicio.obtenerListaUsuarios().subscribe(dato=>{
      this.usuarios=dato;
    });
  }

  eliminarUsuario(id:number){
    this.userServicio.eliminarUsuario(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerUsuarios();
    })
  }
}
