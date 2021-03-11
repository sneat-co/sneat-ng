import {Component, Input, OnChanges, OnDestroy, SimpleChanges, TemplateRef} from '@angular/core';
import {WormholeService} from '../wormhole.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'wormhole-exit',
  templateUrl: './wormhole-exit.component.html',
})
export class WormholeExitComponent implements OnChanges, OnDestroy {

  @Input() public tunnel: string;

  public template: TemplateRef<any>;

  private subscription: Subscription;

  constructor(
    private readonly wormholeService: WormholeService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.tunnel) {
      this.subscription?.unsubscribe();
    }
    if (this.tunnel) {
      this.subscription = this.wormholeService.receive(this.tunnel).subscribe(template => {
        this.template = template;
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
