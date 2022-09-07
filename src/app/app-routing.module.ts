import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard.component';
import { Devoluciones } from './components/devoluciones/devoluciones.component';
import { Header } from './components/header/header.component';
import { Libros } from './components/libros/libros.component';
import { Prestamos } from './components/prestamos/prestamos.component';
import { Principal } from './components/principal/principal.component';
import { Reportes } from './components/reportes/reportes.component';
import { Usuarios } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path: 'dashboard', component: Dashboard},
  {path: 'devoluciones', component: Devoluciones},
  {path: 'libros', component: Libros},
  {path: 'prestamos', component: Prestamos},
  {path: 'principal', component: Principal},
  {path: 'reportes', component: Reportes},
  {path: 'usuarios', component: Usuarios},
  {path: '**', pathMatch:'full', redirectTo:'principal'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
