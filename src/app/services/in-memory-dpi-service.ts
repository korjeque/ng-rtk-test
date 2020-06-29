import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDpiService implements InMemoryDbService {
  createDb(): any {
    let dpies = [
      {id: 1, name: 'HTTP'},
      {id: 2, name: 'BitTorrent'},
      {id: 3, name: 'RTSTP'}
    ];
    return {dpies};
  }
}
