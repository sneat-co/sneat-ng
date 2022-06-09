import type {TemplateRef, Type} from '@angular/core';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface IWorm {
  template?: TemplateRef<any>;
  component?: Type<any>;
};

@Injectable({
  providedIn: 'root'
})
export class WormholeService {
  tunnels: { [id: string]: BehaviorSubject<IWorm | undefined> } = {};

  send(tunnel: string, worm?: IWorm): void {
    console.log('WormholeService.send()', tunnel, worm);
    let channel = this.tunnels[tunnel]
    if (!channel) {
      channel = new BehaviorSubject<IWorm | undefined>(undefined);
      this.tunnels[tunnel] = channel;
    }
    channel.next(worm);
  }

  receive(tunnel: string): Observable<IWorm | undefined> {
    console.log('WormholeService.receive()', tunnel);
    let channel = this.tunnels[tunnel];
    if (!channel) {
      channel = new BehaviorSubject<IWorm | undefined>(undefined);
      this.tunnels[tunnel] = channel;
    }
    return channel.asObservable();
  }
}
