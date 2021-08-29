import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se importan las rutas de los empleados
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';

//Se agregan las rutas de  los empleados
const routes: Routes = [
  //Redirecciona en la raiz si no encuentrá el URL 
  { path: '', pathMatch: 'full', redirectTo: 'agregar-empleado' },
  //URL de la página
  { path: 'agregar-empleado', component: AgregarEmpleadoComponent },
  { path: 'listar-empleado', component: ListarEmpleadoComponent },
  { path: 'editar-empleado/:id', component: EditarEmpleadoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
