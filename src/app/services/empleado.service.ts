import { Empleado } from './../models/empleado';
import {Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
//import {Empleado} from '../models/empleado';
import {Observable} from "rxjs";

@Injectable({
providedIn: 'root'
})

export class EmpleadoService {
  private static instance: EmpleadoService; // Instancia única
  private http: HttpClient;

  URL_API='http://localhost:3000/api/empleados';
  empleados: Empleado[] = [];
  selectedEmpleado: Empleado={
  nombre:'',
  cargo:'',
  departamento:'',
  _id:'',
  sueldo:0
}

  constructor(http: HttpClient) {
  this.http = http;
}

// Método estático para obtener la instancia única, por una sola vez
public static getInstance(http: HttpClient): EmpleadoService {
  if (!EmpleadoService.instance) {
    EmpleadoService.instance = new EmpleadoService(http);
  }
  return EmpleadoService.instance;
}
public getHttpClient(): HttpClient {
  return this.http;
}

getEmpleados(){
return this.http.get<Empleado[]>(this.URL_API);
}
getEmpleados2(): Observable<Empleado[]> {
  return this.http.get<any[]>(`${this.URL_API}/api/empleados`);
}
crearEmpleado(empleado: Empleado): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  return this.http.post<Empleado>(`${this.URL_API}/api/empleados`, empleado, httpOptions);
}
// Método para obtener un empleado por su ID
getEmpleado(id: string): Observable<Empleado> {
  return this.http.get<Empleado>(`${this.URL_API}/${id}`);
}
actualizarEmpleado(id: string, empleado: Empleado): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  return this.http.put<any>(`${this.URL_API}/api/empleados/${id}`, empleado, httpOptions);
}

eliminarEmpleado(id: string): Observable<Empleado> {
  return this.http.delete<Empleado>(`${this.URL_API}/${id}`);
}
deleteEmpleado(empleado:Empleado){
  return this.http.delete<Empleado>(this.URL_API+"/"+empleado._id);
}
createEmpleado(empleado:Empleado){
  return this.http.post(this.URL_API,empleado);
  }
}
