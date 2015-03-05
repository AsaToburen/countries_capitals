
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


/* Filter Testing */

describe('number filters', function() {

var filter;
 
  beforeEach(function (){
    module.apply('ccApp');

    inject(function ($injector) {
      filter = $injector.get('$filter')('number');
    });
  });

    it('should place comma after every third digit', function() {

      expect(filter("123456789")).toEqual("123,456,789");

      });

});


// http mock ///

// not actually macking the http call
//make payload that works like api call
// create an expected payload
  //something similar to the data that you expect to have returned from the call to the api/