import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevolucionesComponent } from './components/devoluciones/devoluciones.component';
import { HeaderComponent } from './components/header/header.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const APP_ROUTES: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'devoluciones', component: DevolucionesComponent},
  {path: 'libros', component: LibrosComponent},
  {path: 'prestamos', component: PrestamosComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '**', pathMatch:'full', redirectTo:'principal'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
