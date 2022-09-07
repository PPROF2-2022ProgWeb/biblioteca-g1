import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevolucionesComponent } from './components/devoluciones/devoluciones.component';
import { HeaderComponent } from './components/header/header.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DevolucionesComponent,
    HeaderComponent,
    LibrosComponent,
    PrestamosComponent,
    PrincipalComponent,
    ReportesComponent,
    UsuariosComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
