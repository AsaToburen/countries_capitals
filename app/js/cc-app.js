
angular.module('ccApp', ['ngRoute', 'ngAnimate'])
  .constant('COUNTRIES_URL', 'http://api.geonames.org/countryInfoJSON')
  .constant('SEARCH_PATH', 'http://api.geonames.org/searchJSON')
  .constant('NEIGHBORS_PATH', 'http://api.geonames.org/neighboursJSON')

.factory('ccRequest', ['$http', '$q', 'COUNTRIES_URL', 'SEARCH_PATH', 'NEIGHBORS_PATH',
    function($http, $q, COUNTRIES_URL, SEARCH_PATH, NEIGHBORS_PATH) {

      var c = {
        countries: [],

        getAll: function() {

          var deferred = $q.defer();

          if (c.countries.length) {
            deferred.resolve(c.countries);
            return deferred.promise;
          }

          var config = {
            cache: true,
            params: {
              username: 'atoburen'
            }
          };

          var req = $http.get(COUNTRIES_URL, config);

          req.success(function(data) {

            var formattedData = c.formatCountries(data);

            c.countries = formattedData;
            deferred.resolve(formattedData);
          });
          return deferred.promise;
        },

        getCountry: function(country) {

          var deferred = $q.defer();

          var config = {
            cache: true,
            params: {
              lang: 'en',
              username: 'atoburen',
              country: country
            }
          };

          var req = $http.get(COUNTRIES_URL, config);

          req.success(function(data) {

            var formattedData = c.formatCountry(data);

            deferred.resolve(formattedData);
          });
          return deferred.promise;
        },


        getCapitals: function(country, capital) {

          var deferred = $q.defer();

          var config = {
            cache: true,
            params: {
              lang: 'en',
              username: 'atoburen',
              q: capital,
              name_equals: capital,
              country: country,
              isNameRequired: true
            }
          };

          var req = $http.get(SEARCH_PATH, config);

          req.success(function(data) {


            var formattedData = c.formatCapitals(data);

            deferred.resolve(formattedData);
          });

          return deferred.promise;
        },

        getNeighbors: function(country) {

          var deferred = $q.defer();

          var config = {
            cache: true,
            params: {
              country: country,
              username: 'atoburen'
            }
          };
          var req = $http.get(NEIGHBORS_PATH, config);

          req.success(function(data) {

            var formattedData = c.formatNeighbors(data);

            deferred.resolve(formattedData);
          });

          return deferred.promise;
        },
        formatCountries: function(d) {
          var r = [];
          angular.forEach(d.geonames, function(name) {

            r.push({
              name: name.countryName,
              code: name.countryCode,
              capital: name.capital,
              area: name.areaInSqKm,
              population: name.population,
              continent: name.continentName
            });
          });

          return r;
        },

        formatCountry: function(c) {

          if (c.geonames.length === 1) {
            return c.geonames[0];
          }

          return false;
        },

        formatCapitals: function(c) {

          var r = [];


          angular.forEach(c.geonames, function(capital) {
            r.push(capital);
          });
          return r;
        },
        formatNeighbors: function(c) {
          var r = [];

          angular.forEach(c.geonames, function(neighbor) {

            r.push(neighbor);
          });

          return r;
        }
      };

      return c;
    }
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html'
      })
      .when('/countries', {
        templateUrl: './countries/countryHome.html',
        controller: 'CountryCtrl',
        resolve: {
          countriesData: ['ccRequest', function(ccRequest) {

            return ccRequest.getAll();
          }]
        }
      })

    .when('/countries/:country/:capital', {

        templateUrl: './countries/countryDetail.html',
        controller: 'CountryDetailCtrl',
        resolve: {

          country: ['$route', 'ccRequest', function($route, ccRequest) {
            var country = $route.current.params.country;

            return ccRequest.getCountry(country);
          }],

          capitals: ['$route', 'ccRequest', function($route, ccRequest) {

            var country = $route.current.params.country;
            var capital = $route.current.params.capital;

            return ccRequest.getCapitals(country, capital);
          }],

          neighbors: ['$route', 'ccRequest', function($route, ccRequest) {
            var country = $route.current.params.country;
            return ccRequest.getNeighbors(country);
          }]
        }
      })
      .when('/error', {
        template: '<p>Error Page Not Found</p>'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .run(['$rootScope', '$location', '$timeout', function($rootScope, $location, $timeout) {
    $rootScope.$on('$routeChangeError', function() {
      $location.path("/error");
    });
    $rootScope.$on('$routeChangeStart', function() {
      $rootScope.isLoading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 2000);
    });
  }])
  .controller('CountryCtrl', ['$scope', 'countriesData', function($scope, countriesData) {
    $scope.countries = countriesData;
  }])

.controller('CountryDetailCtrl', ['$scope', 'country', 'capitals', 'neighbors', function($scope, country, capitals, neighbors) {
  $scope.country = country;
  $scope.capitals = capitals;
  $scope.neighbors = neighbors;
}]);