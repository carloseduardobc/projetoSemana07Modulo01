import { Component } from '@angular/core';

@Component({
  selector: 'app-nami',
  templateUrl: './nami.component.html',
  styleUrls: ['./nami.component.css']
})

export class NamiComponent {

  // public name : string = 'Nami';
  // public count : number = 0;
  // public disable : boolean = true;
  // public imgSource : string = 'https://criticalhits.com.br/wp-';
  public name = 'Nami';
  public count = 0;
  public disable = true;
  public imgSource = 'https://criticalhits.com.br/wp-content/uploads/2022/09/One-Piece-Nami-910x455.jpg';

  public increment(){
    this.count++;
  }

}
