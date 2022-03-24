import { TestBed } from '@angular/core/testing';

import { FilterDataPresenterService } from './filter-data-presenter.service';

describe('FilterDataPresenterService', () => {
  let service: FilterDataPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterDataPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
