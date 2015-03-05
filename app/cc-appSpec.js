
/* Testing Routes */

describe('testing routes', function() {

  beforeEach(module('ccApp'));

  it('should assign appropriate ctrl and template',
    inject(function ($route) {

      expect($route.routes['/'].templateUrl).toEqual('home.html');
      
      expect($route.routes['/countries'].controller).toBe('CountryCtrl');
      expect($route.routes['/countries'].templateUrl).toEqual('./countries/countryHome.html');

      expect($route.routes['/countries/:country/:capital'].controller).toBe('CountryDetailCtrl');
      expect($route.routes['/countries/:country/:capital'].templateUrl).toEqual('./countries/countryDetail.html');

      expect($route.routes[null].redirectTo).toEqual('/');

    }));
});

