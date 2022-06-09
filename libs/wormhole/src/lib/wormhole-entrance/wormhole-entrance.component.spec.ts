import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WormholeEntranceComponent } from './wormhole-entrance.component';

describe('WormholeEntranceComponent', () => {
  let component: WormholeEntranceComponent;
  let fixture: ComponentFixture<WormholeEntranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WormholeEntranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WormholeEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
