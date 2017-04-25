import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { BidService } from './bid.service';
import { Product } from '../../models/product';
import { Bid } from '../../models/bid';

export function main() {
  describe('Bid Service', () => {
    let bidService: BidService;
    let backend: MockBackend;
    let initialResponse: any;

    beforeEach(() => {

      let injector = ReflectiveInjector.resolveAndCreate([
        BidService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: function (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
      ]);
      bidService = injector.get(BidService);
      backend = injector.get(MockBackend);

      let connection: any;
      backend.connections.subscribe((c: any) => connection = c);
      initialResponse = bidService.getAll();
      connection.mockRespond(new Response(new ResponseOptions({
        body: [
          {
            id: 68,
            product: {
              id: 68,
              name: 'Diarrhea',
              img: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
              new: true,
              price: '62.61',
              description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
              refrence: '72-3867158',
              category: 2
            },
            price_actu: '103.45',
            time_off: '2016-08-30T08:05:17Z',
            contrib: 1
          },
          {
            id: 67,
            product: {
              id: 68,
              name: 'Diarrhea',
              img: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
              new: true,
              price: '62.61',
              description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
              refrence: '72-3867158',
              category: 2
            },
            price_actu: '103.45',
            time_off: '2016-08-30T08:05:17Z',
            contrib: 1
          },
          {
            id: 69,
            product: {
              id: 68,
              name: 'Diarrhea',
              img: 'http://dummyimage.com/100x100.jpg/5fa2dd/ffffff',
              new: true,
              price: '62.61',
              description: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
              refrence: '72-3867158',
              category: 2
            },
            price_actu: '103.45',
            time_off: '2016-08-30T08:05:17Z',
            contrib: 1
          }
        ]
      })));
    });

    it('should return an Observable when get called', () => {
      expect(initialResponse).toEqual(jasmine.any(Observable));
    });

    it('should resolve to list of bids when get called', () => {
      let list: Bid[];
      initialResponse.subscribe((data: Bid[]) => list = data);
      expect(list.length).toBe(3);
      expect(list[0].product.name).toEqual('Diarrhea');
      expect(list[1].id).toBe(67);
    });
  });
}
