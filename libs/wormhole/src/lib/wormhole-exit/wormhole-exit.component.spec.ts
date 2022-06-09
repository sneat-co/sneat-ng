import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WormholeExitComponent } from './wormhole-exit.component';

describe('WormholeExitComponent', () => {
  let component: WormholeExitComponent;
  let fixture: ComponentFixture<WormholeExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WormholeExitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WormholeExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
