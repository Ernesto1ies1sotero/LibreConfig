import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { BuscarComponent } from './buscar/buscar.component';
import { InfoComponent } from './info/info.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    BuscarComponent,
    InicioComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [
    BuscarComponent,
    InicioComponent,
    InfoComponent
  ]
})
export class PaginasModule { }
