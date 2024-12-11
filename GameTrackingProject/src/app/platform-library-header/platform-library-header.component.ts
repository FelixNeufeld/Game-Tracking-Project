import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'platform-library-header',
  imports: [],
  templateUrl: './platform-library-header.component.html',
  styleUrl: './platform-library-header.component.css'
})
export class PlatformLibraryHeaderComponent {
@Output() sort = new EventEmitter<any>();

  platformName:string = "Steam";

  changeSorting(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    this.sort.emit(Number(selectElement.value))
  }
}
