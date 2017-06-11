import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class RemoteService {

  names: string[] = [
    'Mobile',
    'Wallet',
    'Rpi',
    'BPi',
    'Android',
    'Laptop'
  ];

  em: EventEmitter<string>;

  constructor() {
    this.em = new EventEmitter<string>();
  }

  getNames() {
    return this.names;
  }

  addName(nm: string) {
    this.names.push(nm);
  }

  publish(nm: string) {
    this.em.emit(nm);
  }

  subscribe(callBack: any) {
    this.em.subscribe(callBack);
  }
}
