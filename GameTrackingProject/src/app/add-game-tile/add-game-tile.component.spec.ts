import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameTileComponent } from './add-game-tile.component';

describe('AddGameTileComponent', () => {
  let component: AddGameTileComponent;
  let fixture: ComponentFixture<AddGameTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGameTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGameTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
