import { Component } from '@angular/core';

@Component({
  selector: 'app-firts-component',
  templateUrl: './firts-component.component.html',
  styleUrls: ['./firts-component.component.css']
})
export class FirtsComponentComponent {
  name: string ='Givaldo';
  age: number = 61
  job: string ='Programador';

}
