import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name:string = 'Jose Luis';
  lastname:string = 'Perez';
  respuesta:string='';


  title = 'ProyectoTienda';

  onSaludar(mensaje:string) {
     console.log(mensaje);
     this.respuesta=mensaje;
  }
}
