import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WormholeEntranceComponent} from './wormhole-entrance/wormhole-entrance.component';
import {WormholeExitComponent} from './wormhole-exit/wormhole-exit.component';
import {WormholeService} from './wormhole.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WormholeEntranceComponent,
    WormholeExitComponent,
  ],
  exports: [
    WormholeEntranceComponent,
    WormholeExitComponent,
  ],
  providers: [
    WormholeService
  ]
})
export class WormholeModule {
}
