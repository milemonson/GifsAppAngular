import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent {

  get resultado(){
    
    return this.gifService.resultados;

  }




  constructor( private gifService:GifsService) { }


}
