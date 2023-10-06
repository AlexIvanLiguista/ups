import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent implements OnInit {
  constructor(private empleadoService: EmpleadoService, private http: HttpClient) { } // Inyecta el servicio y HttpClient


  empleado: Empleado[] = [];

  
  public get empleadoServicePublic(): EmpleadoService {
    return this.empleadoService;
  }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    // Obtén HttpClient directamente desde el servicio
    const httpClient = this.empleadoService.getHttpClient();

    httpClient.get<Empleado[]>(this.empleadoService.URL_API).subscribe(
      res => {
        this.empleadoService.empleados = res;
      },
      err => console.error(err)
    );
  }

  addEmpleado(form: NgForm) {
    const serviceInstance = EmpleadoService.getInstance(this.http);

    serviceInstance.createEmpleado(form.value).subscribe(
      res => {
        this.getEmpleados();
        form.reset(); // Utiliza la función reset()
      },
      err => console.error(err)
    );
  }

  eliminarEmpleado(id: string | undefined) {
    if (id) {
      const serviceInstance = EmpleadoService.getInstance(this.http);

      serviceInstance.eliminarEmpleado(id).subscribe(
        res => {
          this.getEmpleados();
        },
        err => console.error(err)
      );
    } else {
      console.error('ID de empleado no proporcionado');
      return;
    }
  }

  actualizarEmpleado(id: string, empleado: Empleado) {
    const serviceInstance = EmpleadoService.getInstance(this.http);

    serviceInstance.actualizarEmpleado(id, empleado).subscribe(
      res => {
        this.getEmpleados();
      },
      err => console.error(err)
    );
  }

  Delete(empleado: Empleado) {
    const serviceInstance = EmpleadoService.getInstance(this.http);

    serviceInstance.deleteEmpleado(empleado).subscribe(
      res => {
        this.getEmpleados();
      },
      err => console.error(err)
    );
  }
}
