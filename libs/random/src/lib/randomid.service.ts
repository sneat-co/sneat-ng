import { Inject, Injectable, InjectionToken } from '@angular/core';
import { newRandomId, RandomIdOptions, RANDOM_ID_OPTIONS } from './randomid';

@Injectable()
export class RandomIdService {

  constructor(
    @Inject(RANDOM_ID_OPTIONS) private options?: RandomIdOptions
  ) {
  }

  public newRandomId(options?: RandomIdOptions): string {
    return newRandomId(options && this.options
      ? { ...this.options, ...options }
      : this.options
    );
  }
}
