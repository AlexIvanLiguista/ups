
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EmpleadoService } from './services/empleado.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

