import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';


registerLocaleData(localeEs, 'es-AR');
// RUTAS
import {APP_ROUTING} from './app.routes';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevolucionesComponent } from './components/devoluciones/devoluciones.component';
import { HeaderComponent } from './components/header/header.component';
import { LibrosComponent } from './components/libros/libros.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HeadboardComponent } from './components/headboard/headboard.component';
import { PreheaderComponent } from './components/preheader/preheader.component';

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
    UsuariosComponent,
    HeadboardComponent,
    PreheaderComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue:'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
