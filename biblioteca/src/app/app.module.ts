import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
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
import { NuevousuarioComponent } from './components/nuevousuario/nuevousuario.component';
import { SubirnuevolibroComponent } from './components/subirnuevolibro/subirnuevolibro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditarusuarioComponent } from './components/editarusuario/editarusuario.component';
import { EditarlibroComponent } from './components/editarlibro/editarlibro.component';

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
    PreheaderComponent,
    NuevousuarioComponent,
    SubirnuevolibroComponent,
    EditarusuarioComponent,
    EditarlibroComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    ReactiveFormsModule
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
