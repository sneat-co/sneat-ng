import { RandomIdOptions } from './options';

export const defaultRandomIdLen = 20;

const digits = '0123456789';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';

export function newRandomId(options?: RandomIdOptions): string {
  // Alphanumeric characters
  const chars = digits + upperLetters + lowerLetters;
  const id: string[] = [];
  const len = options?.len || defaultRandomIdLen;
  for (let i = 0; i < len; i++) {
    id.push(chars.charAt(Math.floor(Math.random() * chars.length)));
  }
  return id.join('');
}


