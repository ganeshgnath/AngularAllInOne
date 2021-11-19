/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReactiveFormAllService } from './reactive-form-all.service';

describe('Service: ReactiveFormAll', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactiveFormAllService]
    });
  });

  it('should ...', inject([ReactiveFormAllService], (service: ReactiveFormAllService) => {
    expect(service).toBeTruthy();
  }));
});
