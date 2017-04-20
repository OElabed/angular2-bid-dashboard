import { ReflectiveInjector } from '@angular/core';
import { BaseRequestOptions, ConnectionBackend, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Observable } from 'rxjs/Observable';

import { CategoryService } from './category.service';
import { Category } from '../../models/category';

export function main() {
  describe('Category Service', () => {
    let categoryService: CategoryService;
    let backend: MockBackend;
    let initialResponse: any;

    beforeEach(() => {

      let injector = ReflectiveInjector.resolveAndCreate([
        CategoryService,
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
      categoryService = injector.get(CategoryService);
      backend = injector.get(MockBackend);

      let connection: any;
      backend.connections.subscribe((c: any) => connection = c);
      initialResponse = categoryService.get();
      connection.mockRespond(new Response(new ResponseOptions({
        body: [
          {
            id: 44,
            name: 'category test 1'
          },
          {
            id: 45,
            name: 'category test 2'
          }
        ]
      })));
    });

    it('should return an Observable when get called', () => {
      expect(initialResponse).toEqual(jasmine.any(Observable));
    });

    it('should resolve to list of categories when get called', () => {
      let list: Category[];
      initialResponse.subscribe((data: Category[]) => list = data);
      expect(list.length).toBe(2);
      expect(list[0].name).toEqual('category test 1');
      expect(list[1].id).toBe(45);
    });
  });
}
