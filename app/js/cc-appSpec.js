
/* Sample Http Data */

var mockCountriesPayload = [{
 "countryName":"Andorra","currencyCode":"EUR","fipsCode":"AN","countryCode":"AD","isoNumeric":"020","north":42.65604389629997,"capital":"Andorra la Vella","continentName":"Europe","areaInSqKm":"468.0","languages":"ca","isoAlpha3":"AND","continent":"EU","south":42.42849259876837,"east":1.7865427778319827,"geonameId":3041565,"west":1.4071867141112762,"population":"84000"},{"countryName":"United Arab Emirates","currencyCode":"AED","fipsCode":"AE","countryCode":"AE","isoNumeric":"784","north":26.08415985107422,"capital":"Abu Dhabi","continentName":"Asia","areaInSqKm":"82880.0","languages":"ar-AE,fa,en,hi,ur","isoAlpha3":"ARE","continent":"AS","south":22.633329391479492,"east":56.38166046142578,"geonameId":290557,"west":51.58332824707031,"population":"4975593"},{"countryName":"Afghanistan","currencyCode":"AFN","fipsCode":"AF","countryCode":"AF","isoNumeric":"004","north":38.483418,"capital":"Kabul","continentName":"Asia","areaInSqKm":"647500.0","languages":"fa-AF,ps,uz-AF,tk","isoAlpha3":"AFG","continent":"AS","south":29.377472,"east":74.879448,"geonameId":1149361,"west":60.478443,"population":"29121286"},{"countryName":"Antigua and Barbuda","currencyCode":"XCD","fipsCode":"AC","countryCode":"AG","isoNumeric":"028","north":17.729387,"capital":"St. John's","continentName":"North America","areaInSqKm":"443.0","languages":"en-AG","isoAlpha3":"ATG","continent":"NA","south":16.996979,"east":-61.672421,"geonameId":3576396,"west":-61.906425,"population":"86754"},{"countryName":"Anguilla","currencyCode":"XCD","fipsCode":"AV","countryCode":"AI","isoNumeric":"660","north":18.283424,"capital":"The Valley","continentName":"North America","areaInSqKm":"102.0","languages":"en-AI","isoAlpha3":"AIA","continent":"NA","south":18.166815,"east":-62.971359,"geonameId":3573511,"west":-63.172901,"population":"13254"},{"countryName":"Albania","currencyCode":"ALL","fipsCode":"AL","countryCode":"AL","isoNumeric":"008","north":42.665611,"capital":"Tirana","continentName":"Europe","areaInSqKm":"28748.0","languages":"sq,el","isoAlpha3":"ALB","continent":"EU","south":39.648361,"east":21.068472,"geonameId":783754,"west":19.293972,"population":"2986952"},{"countryName":"Armenia","currencyCode":"AMD","fipsCode":"AM","countryCode":"AM","isoNumeric":"051","north":41.301834,"capital":"Yerevan","continentName":"Asia","areaInSqKm":"29800.0","languages":"hy","isoAlpha3":"ARM","continent":"AS","south":38.830528,"east":46.772435045159995,"geonameId":174982,"west":43.44978,"population":"2968000"},{"countryName":"Angola","currencyCode":"AOA","fipsCode":"AO","countryCode":"AO","isoNumeric":"024","north":-4.376826,"capital":"Luanda","continentName":"Africa","areaInSqKm":"1246700.0","languages":"pt-AO","isoAlpha3":"AGO","continent":"AF","south":-18.042076,"east":24.082119,"geonameId":3351879,"west":11.679219,"population":"13068161"},{"countryName":"Antarctica","currencyCode":"","fipsCode":"AY","countryCode":"AQ","isoNumeric":"010","north":-60.515533,"capital":"","continentName":"Antarctica","areaInSqKm":"1.4E7","languages":"","isoAlpha3":"ATA","continent":"AN","south":-89.9999,"east":179.9999,"geonameId":6697173,"west":-179.9999,"population":"0"},{"countryName":"Argentina","currencyCode":"ARS","fipsCode":"AR","countryCode":"AR","isoNumeric":"032","north":-21.781277,"capital":"Buenos Aires","continentName":"South America","areaInSqKm":"2766890.0","languages":"es-AR,en,it,de,fr,gn","isoAlpha3":"ARG","continent":"SA","south":-55.061314,"east":-53.591835,"geonameId":3865483,"west":-73.58297,"population":"41343201"},{"countryName":"American Samoa","currencyCode":"USD","fipsCode":"AQ","countryCode":"AS","isoNumeric":"016","north":-11.0497,"capital":"Pago Pago","continentName":"Oceania","areaInSqKm":"199.0","languages":"en-AS,sm,to","isoAlpha3":"ASM","continent":"OC","south":-14.382478,"east":-169.416077,"geonameId":5880801,"west":-171.091888,"population":"57881"},{"countryName":"Austria","currencyCode":"EUR","fipsCode":"AU","countryCode":"AT","isoNumeric":"040","north":49.0211627691393,"capital":"Vienna","continentName":"Europe","areaInSqKm":"83858.0","languages":"de-AT,hr,hu,sl","isoAlpha3":"AUT","continent":"EU","south":46.3726520216244,"east":17.1620685652599,"geonameId":2782113,"west":9.53095237240833,"population":"8205000"},{"countryName":"Australia","currencyCode":"AUD","fipsCode":"AS","countryCode":"AU","isoNumeric":"036","north":-10.062805,"capital":"Canberra","continentName":"Oceania","areaInSqKm":"7686850.0","languages":"en-AU","isoAlpha3":"AUS","continent":"OC","south":-43.64397,"east":153.639252,"geonameId":2077456,"west":112.911057,"population":"21515754"},{"countryName":"Aruba","currencyCode":"AWG","fipsCode":"AA","countryCode":"AW","isoNumeric":"533","north":12.623718127152925,"capital":"Oranjestad","continentName":"North America","areaInSqKm":"193.0","languages":"nl-AW,es,en","isoAlpha3":"ABW","continent":"NA","south":12.411707706190716,"east":-69.86575120104982,"geonameId":3577279,"west":-70.0644737196045,"population":"71566"},{"countryName":"Åland","currencyCode":"EUR","fipsCode":"","countryCode":"AX","isoNumeric":"248","north":60.488861,"capital":"Mariehamn","continentName":"Europe","areaInSqKm":"1580.0","languages":"sv-AX","isoAlpha3":"ALA","continent":"EU","south":59.90675,"east":21.011862,"geonameId":661882,"west":19.317694,"population":"26711"},{"countryName":"Azerbaijan","currencyCode":"AZN","fipsCode":"AJ","countryCode":"AZ","isoNumeric":"031","north":41.90564,"capital":"Baku","continentName":"Asia","areaInSqKm":"86600.0","languages":"az,ru,hy","isoAlpha3":"AZE","continent":"AS","south":38.38915252685547,"east":50.370083,"geonameId":587116,"west":44.774113,"population":"8303512"},{"countryName":"Bosnia and Herzegovina","currencyCode":"BAM","fipsCode":"BK","countryCode":"BA","isoNumeric":"070","north":45.239193,"capital":"Sarajevo","continentName":"Europe","areaInSqKm":"51129.0","languages":"bs,hr-BA,sr-BA","isoAlpha3":"BIH","continent":"EU","south":42.546112,"east":19.622223,"geonameId":3277605,"west":15.718945,"population":"4590000"},{"countryName":"Barbados","currencyCode":"BBD","fipsCode":"BB","countryCode":"BB","isoNumeric":"052","north":13.327257,"capital":"Bridgetown","continentName":"North America","areaInSqKm":"431.0","languages":"en-BB","isoAlpha3":"BRB","continent":"NA","south":13.039844,"east":-59.420376,"geonameId":3374084,"west":-59.648922,"population":"285653"},{"countryName":"Bangladesh","currencyCode":"BDT","fipsCode":"BG","countryCode":"BD","isoNumeric":"050","north":26.631945,"capital":"Dhaka","continentName":"Asia","areaInSqKm":"144000.0","languages":"bn-BD,en","isoAlpha3":"BGD","continent":"AS","south":20.743334,"east":92.673668,"geonameId":1210997,"west":88.028336,"population":"156118464"},{"countryName":"Belgium","currencyCode":"EUR","fipsCode":"BE","countryCode":"BE","isoNumeric":"056","north":51.505444,"capital":"Brussels","continentName":"Europe","areaInSqKm":"30510.0","languages":"nl-BE,fr-BE,de-BE","isoAlpha3":"BEL","continent":"EU","south":49.49361,"east":6.403861,"geonameId":2802361,"west":2.546944,"population":"10403000"
}];

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
      expect(filter("4567959493")).toEqual("4,567,959,493");
      expect(filter("8951")).toEqual("8,951");
      expect(filter("10000000")).toEqual("10,000,000");
      expect(filter("77777777777")).toEqual("77,777,777,777");
    });
});

/* Http Testing */

describe('ccApp', function() {
  var $httpBackend, $rootScope, ccRequest, CountryCtrl, countriesData, country, capitals, neighbors, CountryDetailCtrl, scope;

  beforeEach(module('ccApp'));

  beforeEach(inject(function(_$httpBackend_, _$rootScope_, _ccRequest_, $controller) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    ccRequest = _ccRequest_;

    scope = $rootScope.$new();

    CountryCtrl = $controller('CountryCtrl', {
      $scope: scope,
      countriesData : countriesData
    });

    CountryDetailCtrl = $controller('CountryDetailCtrl', {
      $scope: scope,
      country : country,
      capitals : capitals,
      neighbors : neighbors
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('ccRequest should request data successfully from the countries endpoint', function(){
    inject(function(ccRequest, $httpBackend) {
      
      $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(200);
      
      ccRequest.getAll().then(function(data) {
        $rootScope.$digest();
        $httpBackend.flush();
        
        expect(data).toBe(mockCountriesPayload);
      });
    });
  });

it('ccRequest should make a successful request from the country endpoint.', function(){
    inject(function(ccRequest, $httpBackend) {

      $httpBackend.expectGET('http://api.geonames.org/countryInfoJSON?username=atoburen').respond(200);
      
      ccRequest.getCountry().then(function(data) {
        $rootScope.$digest();
        $httpBackend.flush();
        expect(data).toBe(mockCountriesPayload);
      });
    });
  });

it('ccRequest should make a successful request from the capitals endpoint.', function(){
    inject(function(ccRequest, $httpBackend) {
      
      $httpBackend.expectGET('http://api.geonames.org/countryInfoJSON?username=atoburen').respond(200);
      
      ccRequest.getCapitals().then(function(data) {
        $rootScope.$digest();
        $httpBackend.flush();
        expect(data).toBe(mockCountriesPayload);
      });
    });
  });

it('ccRequest should make a successful request from the neighbors endpoint.', function(){
    inject(function(ccRequest, $httpBackend) {
      
      $httpBackend.expectGET('http://api.geonames.org/countryInfoJSON?username=atoburen').respond(200);
      
      ccRequest.getNeighbors().then(function(data) {
        $rootScope.$digest();
        $httpBackend.flush();
        expect(data).toBe(mockCountriesPayload);
      });
    });
  });
});









