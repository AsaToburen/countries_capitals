angular.module('ccApp', ['ngRoute', 'ngAnimate'])
  .constant('COUNTRIES_URL', 'http://api.geonames.org/countryInfoJSON?lang=en&username=atoburen' )
  .constant('SEARCH_PATH', 'http://api.geonames.org/searchJSON?q=') 
  .constant('ENDSTRING', '&isNameRequired=true&username=atoburen')

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
.factory('detailRequest', ['$http', '$q', 'SEARCH_PATH', 'ENDSTRING',
  function($http, $q, SEARCH_PATH, ENDSTRING) {
    return function(q) {
      var url = SEARCH_PATH + q + '&name_equals=' + q + ENDSTRING;
      var defer = $q.defer();
      $http.get(url, { cache : false})
        .success(function(data) {
            defer.resolve(data);
          })
        return defer.promise;
      }
}])
.factory('neighborRequest', [])
  .config(['$routeProvider', function($routeProvider) {
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
    .when('/countries/:country/capital', {
      templateUrl: './countries/countryDetail.html',
      controller: 'CountryDetailCtrl',
      resolve : {
        country : ['detailRequest', '$route', function(detailRequest, $route) {
          var country = $route.current.params.country;
          return detailRequest(country);
       }]
      }
    });
  }])
  .controller('CountryCtrl', ['$scope', 'countriesData', function($scope, countriesData) {
    var countryObjs = countriesData.geonames,
     countries = [];
     console.log(countryObjs);
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

  .controller('CountryDetailCtrl', ['$scope', 'country', function($scope, country) {
        var countryData = country.geonames[0];
        $scope.detail = {
          "name" : countryData.countryName,
          "population" : countryData.population
        
        };
        console.log(countryData);
    }]);












