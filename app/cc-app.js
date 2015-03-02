angular.module('ccApp', ['ngRoute', 'ngAnimate'])
  .constant('COUNTRIES_URL', 'http://api.geonames.org/countryInfoJSON?lang=en&username=atoburen' )
  .constant('SEARCH_PATH', 'http://api.geonames.org/searchJSON?') 
  .constant('COUNTRY_PATH', '/?q={{ q }}')
  .constant('ENDSTRING', '&name_equals={{ q }}&country={{}}&isNameRequired=true&username=atoburen')
 

 // Working example query string
 // http://api.geonames.org/searchJSON?q=Kabul&name_equals=Kabul&country=AF&isNameRequired=true&username=atoburen


.factory('ccRequest', ['$http', '$q', 'COUNTRIES_URL',
    function($http,   $q,  COUNTRIES_URL) {
        return function() {
            var defer = $q.defer();
            $http.get(COUNTRIES_URL, { cache : true })
                .success(function(data) {
                    defer.resolve(data);
                })
            return defer.promise;
        }
    }])
  .config([ '$routeProvider', function( $routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'home.html'
    })
    .when('/countries', {
      templateUrl: './countries/countryHome.html',
      controller: 'CountryCtrl',
      resolve : {
        countriesData : ['ccRequest', '$route', function(ccRequest, $route) {
        return ccRequest($route.data);
      }]
    }
    })
    .when('countries/:country/:capital', {
      templateUrl: '.countries/countryDetail.html',
      controller: 'CountryDetailCtrl'
    })
  }])
  .run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$routeChangeError', function() {
      $location.path("/error");
    });
    $rootScope.$on('$routeChangeStart', function() {
      $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 500);
    });
  })
  .controller('CountryCtrl', ['$scope', 'countriesData', function($scope, countriesData) {
    var countryObjs = countriesData.geonames,
     countries = [];
    parseData = function(ccData, countryArray) {
      for(i = 0; i<250; i++) {
        countryArray.push({
          "name" : ccData[i].countryName,
          "code" : ccData[i].countryCode,
          "capital" : ccData[i].capital,
          "area" : ccData[i].areaInSqKm,
          "population" : ccData[i].population,
          "continent" : ccData[i].continentName,
          "countryId" : ccData[i]
        });
      }
    };
    parseData(countryObjs, countries);
    $scope.countries = countries;
    console.log(countries);
    }])


  .controller('CountryDetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
    
    }]);












