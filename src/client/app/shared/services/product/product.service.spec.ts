import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { ProductService } from './product.service';
import { Product } from '../../models/product';

export function main() {
  describe('Product Service', () => {
    let productService: ProductService;
    let backend: MockBackend;
    let initialResponse: any;

    beforeEach(() => {

      let injector = ReflectiveInjector.resolveAndCreate([
        ProductService,
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
      productService = injector.get(ProductService);
      backend = injector.get(MockBackend);

      let connection: any;
      backend.connections.subscribe((c: any) => connection = c);
      initialResponse = productService.get();
      connection.mockRespond(new Response(new ResponseOptions({
        body: [
          {
            id: 44,
            name: 'product Test 1',
            price: 35,
            description: 'test'
          },
          {
            id: 45,
            name: 'product Test 2',
            price: 35,
            description: 'test'
          }
        ]
      })));
    });

    it('should return an Observable when get called', () => {
      expect(initialResponse).toEqual(jasmine.any(Observable));
    });

    it('should resolve to list of procucts when get called', () => {
      let list: Product[];
      initialResponse.subscribe((data: Product[]) => list = data);
      expect(list.length).toBe(2);
      expect(list[0].name).toEqual('product Test 1');
      expect(list[1].id).toBe(45);
    });
  });
}
