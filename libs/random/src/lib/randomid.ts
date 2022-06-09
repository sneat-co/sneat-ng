import { InjectionToken } from '@angular/core';

export const RANDOM_ID_OPTIONS = new InjectionToken('random ID options');

export interface RandomIdOptions {
  len?: number;
  digits?: boolean
  lowerCaseLetters?: boolean;
  upperCaseLetters?: boolean;
}

export const defaultRandomIdLen = 20;

const digits = '0123456789';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';

export function newRandomId(options?: RandomIdOptions): string {
  const chars = (
    (options?.digits ? digits : '') +
    (options?.lowerCaseLetters ? lowerLetters : '') +
    (options?.upperCaseLetters ? upperLetters : '')
  ) || digits + lowerLetters + upperLetters;
  const id: string[] = [];
  const len = options?.len || defaultRandomIdLen;
  for (let i = 0; i < len; i++) {
    id.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }
  return id.join('');
}


