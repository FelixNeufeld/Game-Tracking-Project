import { Component, Output, EventEmitter } from '@angular/core';
import { GameItem } from '../../shared/models/gameItem';

@Component({
  selector: 'add-game-tile',
  imports: [],
  templateUrl: './add-game-tile.component.html',
  styleUrl: './add-game-tile.component.css'
})
export class AddGameTileComponent {
  @Output() addGame = new EventEmitter<GameItem>();

  gameTitle: string = "";
  playtime: number = 0;
  firstPlayed: Date = new Date();
  lastPlayed: Date = new Date();
  platform: string = ""
  imageUrl: string = "";
  
  addNewGame(){
    this.addGame.emit(new GameItem(this.gameTitle, this.playtime, this.firstPlayed, this.lastPlayed, this.platform, this.imageUrl));
  }
}
