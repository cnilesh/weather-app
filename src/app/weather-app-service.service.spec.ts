import { TestBed, inject } from '@angular/core/testing';

import { WeatherAppServiceService } from './weather-app-service.service';

describe('WeatherAppServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherAppServiceService]
    });
  });

  it('should be created', inject([WeatherAppServiceService], (service: WeatherAppServiceService) => {
    expect(service).toBeTruthy();
  }));
});
