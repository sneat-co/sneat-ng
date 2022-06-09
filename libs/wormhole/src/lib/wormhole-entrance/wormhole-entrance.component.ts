import type {TemplateRef, Type} from '@angular/core';
import {Component, Input, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {IWorm, WormholeService} from '../wormhole.service';

@Component({
  selector: 'sneat-wormhole-entrance',
  template: '',
})
export class WormholeEntranceComponent implements OnChanges, OnDestroy {

  @Input() public tunnel?: string;

  @Input() template?: TemplateRef<any>;
  @Input() component?: Type<any>;

  constructor(
    private readonly wormholeService: WormholeService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.tunnel && (changes['template'] || changes['component'])) {
      const worm: IWorm | undefined = this.template ? {template: this.template}
        : this.component ? {component: this.component} : undefined;
      this.wormholeService.send(this.tunnel, worm);
    }
  }

  ngOnDestroy(): void {
    if (this.tunnel) {
      this.wormholeService.send(this.tunnel, undefined);
    }
  }
}
