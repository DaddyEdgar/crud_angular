import { Injectable } from '@angular/core';
//Comunicar con la Api con la informacion
import { HttpClient } from '@angular/common/http';
//Va estar observando todo el entorno HTML junto con la informacion
import { Observable } from 'rxjs';
//La clase empleado, por que es el modelo y tiene la estructura de la informacion
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API:string='Http://localhost/empleados'

  constructor() { }
}
