import { TestBed } from '@angular/core/testing';

import { InterstellarService } from "./interstellar-service.service";

describe('InterstellarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterstellarService = TestBed.get(InterstellarService);
    expect(service).toBeTruthy();
  });
});
