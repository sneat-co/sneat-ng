import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {WormholeModule} from '@sneat/wormhole';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    WormholeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
