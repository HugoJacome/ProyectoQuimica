import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  selected: boolean = false;
  game: string = '';
  constructor() { }

  ngOnInit(): void {

  }
  selectGame(game: string){
    console.log(game);
    this.selected = true;
    this.game = game;
  }
  unselect(){
    this.selected = false;
  }
}
