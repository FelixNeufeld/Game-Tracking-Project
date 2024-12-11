import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { GameItem } from '../shared/models/gameItem';
import { GameTilesComponent } from "./game-tiles/game-tiles.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GameTilesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
