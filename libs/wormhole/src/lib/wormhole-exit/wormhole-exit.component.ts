import type {TemplateRef, Type} from '@angular/core';
import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {WormholeService} from '../wormhole.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'sneat-wormhole-exit',
  templateUrl: './wormhole-exit.component.html',
})
export class WormholeExitComponent implements OnChanges, OnDestroy {

  @Input() public tunnel?: string;

  public template: TemplateRef<any> | null = null;
  public component?: Type<any>;

  private subscription?: Subscription;

  constructor(
    private readonly wormholeService: WormholeService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('WormholeExitComponent.ngOnChanges()', caches);
    if (changes['tunnel']) {
      this.subscription?.unsubscribe();
    }
    if (this.tunnel) {
      this.subscription = this.wormholeService.receive(this.tunnel).subscribe(worm => {
        this.template = worm?.template || null;
        this.component = worm?.component;
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
