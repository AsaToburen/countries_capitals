
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

describe('Routes w/ resolves', function() {
  var httpMock = {};

  beforeEach(module('ccApp', function($provide) {
    $provide('$http', httpMock);
  }));

  var $location, $route, $rootScope;

  beforeEach(inject(function(_$location_, _$route_, _$routeScope_, $httpBackend, $templateCache){
    $location = _$location_;
    $route = _$route_;
    $routeScope = _$rootScope_;


    $templateCache.put('home.html', 'home HTML');

    httpMock.get = jasmine.createSpy('spy').and.returnValue('test');
  }));


it('should load the home page on successful load of /', 
        inject(function($injector){
            expect($location.path()).toBe( '' );
            $location.path('/');

            $rootScope.$digest();

            expect($location.path()).toBe( '/' );

            // We need to do $injector.invoke to resolve dependencies
            expect($injector.invoke($route.current.resolve.countriesData)).toBe('test');
    }));
});