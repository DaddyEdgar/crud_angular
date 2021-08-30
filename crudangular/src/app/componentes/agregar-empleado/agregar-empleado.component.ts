import { Component, OnInit } from '@angular/core';
//Ayuda a interactuar con el formulario
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  formularioDeEmpleado: FormGroup;

  //En el constructor vamos a recibir todos los datos del formulario, formados dentro de un grupo
  constructor(public formulario: FormBuilder) {
    //recepciona todoso los valores, gracias al FormBuilder
    this.formularioDeEmpleado = this.formulario.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
    });
  }

  ngOnInit(): void {
  }

  //Recepciona todos los datos del formulario
  enviarDatos(): any {
    console.log('Si funciona el boton');
    console.log(this.formularioDeEmpleado.value);
  }
}
