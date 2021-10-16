import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[]=['Black Panther','Dr. Strange','Hulk','Thor','SpiderMan'];
  heroeBorrado:string='';

  borrarHeroe(){
    this.heroeBorrado=this.heroes.shift()||'';
    console.log(this.heroeBorrado);

  }

}
