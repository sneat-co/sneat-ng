import { Inject, Injectable, InjectionToken } from '@angular/core';
import { newRandomId } from './randomid';
import { RandomIdOptions } from './options';


const RANDOM_ID_OPTIONS = new InjectionToken('random ID options');

@Injectable()
export class RandomIdService {

  constructor(
    @Inject(RANDOM_ID_OPTIONS) private options?: RandomIdOptions
  ) {
  }

  public newRandomId(options?: RandomIdOptions): string {
    if (options && this.options) {
      options = { ...this.options, ...options };
    }
    return newRandomId(options || this.options);
  }
}
