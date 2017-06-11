import { RemoteService } from './remote.service';
import { Injectable } from '@angular/core';

@Injectable()
export class WalletService {

  constructor(
    private remote: RemoteService
  ) {
    remote.getNames();
  }
}
