import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GameItem } from '../../shared/models/gameItem';
import { AddGameTileComponent } from "../add-game-tile/add-game-tile.component";
import { PlatformLibraryHeaderComponent } from "../platform-library-header/platform-library-header.component";

@Component({
  selector: 'game-tiles',
  imports: [CommonModule, FormsModule, AddGameTileComponent, PlatformLibraryHeaderComponent],
  templateUrl: './game-tiles.component.html',
  styleUrl: './game-tiles.component.css'
})
export class GameTilesComponent {
  @Input() items : GameItem[] = [
    new GameItem("Elden Ring", 95.2, new Date(2024, 10, 12), new Date(2023, 10, 10), "Steam", "https://m.media-amazon.com/images/I/61KhD6O1vYL._AC_UF894,1000_QL80_.jpg"),
    new GameItem("Tekken 8", 195, new Date(2024, 12, 9), new Date(2024, 1, 28), "Steam", "https://m.media-amazon.com/images/I/61CrM6gZ2AL._AC_UF894,1000_QL80_.jpg"),
    new GameItem("Xenoblade Chronicles", 130, new Date(2024, 10, 12), new Date(2023, 10, 10), "Nintendo Switch", "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000029711/d55f4d73ad88beed1ea061aaaacbe772e40f46b598db513f3f85369d3455aa82"),
    new GameItem("Kingdom Hearts", 0, new Date(2024, 10, 12), new Date(2023, 10, 10), "Steam", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1QAPPnQ8PmgYvaOrykqN6QLR9-nmour-g2g&s"),
    new GameItem("Dragon Quest XI", 0, new Date(2024, 10, 12), new Date(2023, 10, 10), "Steam", "https://preview.redd.it/high-quality-dragon-quest-11-cover-art-or-other-official-v0-usexp2r7cm0d1.jpeg?width=645&format=pjpg&auto=webp&s=31a59580d6e79c438a5950c5962a0738c49a8165"),
    new GameItem("Persona 5", 0, new Date(2024, 10, 12), new Date(2023, 10, 10), "Steam", "https://cdn.mobygames.com/covers/8842019-persona-5-royal-playstation-4-front-cover.jpg"),
    new GameItem("Legacy of Kain: Soul Reaver 1 & 2 Remastered", 95.2, new Date(2024, 10, 12), new Date(2023, 10, 10), "Steam", "https://image.api.playstation.com/vulcan/ap/rnd/202409/1715/6af0f93de5411c2f99527f6d538809ad09e8bc67783b0ffe.jpg")
  ]
  title = 'GameTrackingProject';

  selectGame(item: GameItem){

  }

  sortGames(sortOrder:number){
      switch(sortOrder){
        case 0:
          this.items.sort((a, b) => {
            if(a.gameTitle < b.gameTitle){
              return -1;
            }
            else if (a.gameTitle > b.gameTitle){
              return 1;
            }
            else {
              return 0;
            }
          });
          break;

        case 1:
          this.items.sort((a, b) => {
            if(a.playtime < b.playtime){
              return 1;
            }
            else if (a.playtime > b.playtime){
              return -1;
            }
            else {
              return 0;
            }
          });
          break;
      }
  }
}
