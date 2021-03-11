import {Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {WormholeService} from '../wormhole.service';

@Component({
  selector: 'wormhole-entrance',
  templateUrl: './wormhole-entrance.component.html',
})
export class WormholeEntranceComponent implements OnInit, OnDestroy {

  @Input() public tunnel: string;

  @ContentChild(TemplateRef) template;

  constructor(
    private readonly wormholeService: WormholeService,
  ) {
  }

  ngOnInit(): void {
    if (this.tunnel && this.template) {
      this.wormholeService.send(this.tunnel, this.template);
    }
  }

  ngOnDestroy(): void {
    if (this.tunnel) {
      this.wormholeService.send(this.tunnel, undefined);
    }
  }
}
