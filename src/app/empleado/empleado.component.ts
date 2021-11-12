import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aqui hay un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color: red;}"]

})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";
  apellido="Diaz";
  edad=33;
  //empresa="T-Systems";
  verCuadro=true;
  usuRegistrado=false;
  textoDeRegistro="No hay usuarios registrados";

  setRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //alert("El usuario se ha registrado");
    //this.textoDeRegistro="El usuario se ha registrado";
    if((<HTMLInputElement> event.target).value=="si"){
      this.textoDeRegistro="El usuario se ha registrado";
    }else{
      this.textoDeRegistro="No hay usuarios registrados";
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
