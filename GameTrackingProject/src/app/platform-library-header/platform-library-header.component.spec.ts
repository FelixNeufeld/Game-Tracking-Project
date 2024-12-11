import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformLibraryHeaderComponent } from './platform-library-header.component';

describe('PlatformLibraryHeaderComponent', () => {
  let component: PlatformLibraryHeaderComponent;
  let fixture: ComponentFixture<PlatformLibraryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformLibraryHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformLibraryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
