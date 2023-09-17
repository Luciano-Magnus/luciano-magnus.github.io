import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MestresComponent } from './home/mestres/mestres.component';
import { ModalidadesComponent } from './home/modalidades/modalidades.component';
import { PlanosComponent } from './home/planos/planos.component';
import { BeneficiosComponent } from './home/beneficios/beneficios.component';
import { HorariosComponent } from './home/horarios/horarios.component';
import { FabComponent } from './shared/utils/fab/fab.component';
import { SobreComponent } from './home/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MestresComponent,
    ModalidadesComponent,
    PlanosComponent,
    BeneficiosComponent,
    HorariosComponent,
    FabComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
