import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WormholeService {
  tunnels: { [id: string]: BehaviorSubject<TemplateRef<any>> } = {};

  send(tunnel: string, template: TemplateRef<any>): void {
    if (!tunnel) {
      throw new Error('tunnel name is a required field, got empty');
    }
    const channel = this.tunnels[tunnel]
    if (!channel) {
      throw new Error('unknown tunnel: ' + tunnel);
    }
    channel.next(template);
  }

  receive(tunnel: string): Observable<TemplateRef<any>> {
    let channel = this.tunnels[tunnel];
    if (!channel) {
      channel = new BehaviorSubject<TemplateRef<any> | undefined>(undefined);
      this.tunnels[tunnel] = channel;
    }
    return channel.asObservable();
  }
}
