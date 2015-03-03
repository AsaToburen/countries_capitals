angular.module('ccApp', ['ngRoute', 'ngAnimate'])
  .constant('COUNTRIES_URL', 'http://api.geonames.org/countryInfoJSON' )
  .constant('SEARCH_PATH', 'http://api.geonames.org/searchJSON')
  .constant('NEIGHBORS_PATH', 'http://api.geonames.org/neighboursJSON')

 // Working example query string
 // http://api.geonames.org/searchJSON?q=Kabul&name_equals=Kabul&country=AF&isNameRequired=true&username=atoburen


.factory('ccRequest', ['$http', '$q', 'COUNTRIES_URL', 'SEARCH_PATH', 'NEIGHBORS_PATH',
    function($http, $q, COUNTRIES_URL, SEARCH_PATH, NEIGHBORS_PATH) {
      /*
       4) Let's rework this a bit to make our service a little more useful.
        return function() {
            var defer = $q.defer();
            $http.get(COUNTRIES_URL, { cache : true })
                .success(function(data) {
                    defer.resolve(data);
                })
            return defer.promise;
        }
       */

      // Factories can simply return an object, so we can create an object that
      // has a couple functions that we can use.
      var c = {
        /**
         * Cached array of countries
         * @type Array Countries
         */
        countries: [],

        /**
         * Get all the countries
         * @return $promise Promise that when resolved will be a list of all countries
         */
        getAll: function() {
          // Set up the deferred promise
          var deferred = $q.defer();

          // Check if we've already loaded the data
          if (c.countries.length) {
            // Resolve our promise
            deferred.resolve(c.countries);

            // Return the promise.  Function will stop executing here.
            return deferred.promise;
          }

          // Configuration info.  We pass the key/value  pairs in to our config
          // in a property called params.  $http will take the key/values in params
          // and append them to the end of the URL for us automaticaly
          var config = {
            cache: true,
            params: {
              lang: 'en',
              username: 'atoburen'
            }
          };

          // Make the HTTP request
          var req = $http.get(COUNTRIES_URL, config);

          // Set up a callback for when the HTTP call returns
          req.success(function(data) {
            // Because the data comes back in a property of geonames and we
            // want to do some processing on it, we can use our service to
            // format that data before we send it back to the thing calling it
            var formattedData = c.formatCountries(data);

            c.countries = formattedData;

            // If we got here, that means our HTTP call returned successfully
            // and we formatted the data.  So we can resolve the deferred
            // promise and pass back the data
            deferred.resolve(formattedData);
          });

          // Return the promise, so things that are using this service
          // can set up callbacks that will execute when this promise
          // is resolved.  That way we aren't trying to process the data
          // before it is actually there.
          return deferred.promise;
        },

        /**
         * Load the data for the provided country
         * @param  String country Country to lookup
         * @return $promise       Promise that when resolved will be the country
         */
        getCountry: function(country) {
          // Set up the deferred promise
          var deferred = $q.defer();

          // Configuration info.  We're going to add in our country code.
          var config = {
            cache: true,
            params: {
              lang: 'en',
              username: 'atoburen',
              country: country
            }
          };

          // Make the HTTP request
          var req = $http.get(COUNTRIES_URL, config);

          // Set up a callback for when
          req.success(function(data) {
            // Because the data comes back in a property of geonames, we again
            // do some preprocessing on it
            var formattedData = c.formatCountry(data);

            // If we got here, that means our HTTP call returned successfully
            // and we formatted the data.  So we can resolve the deferred
            // promise and pass back the data
            deferred.resolve(formattedData);
          });

          // Return the promise
          return deferred.promise;
        },

        /**
         * Load the data for the provided capital
         * @param  String country Country for capital
         * @param  String capital Captial to look up
         * @return $promise       Promise that when resolved will be the capital
         */
        getCapitals: function(country, capital) {
          // Set up the deferred promise
          var deferred = $q.defer();

          // Configuration info.  This time, we're going to add in our
          // captial and country data.
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

          // Make the HTTP request
          var req = $http.get(SEARCH_PATH, config);

          // Set up a callback for when
          req.success(function(data) {
            // Because the data comes back in a property of geonames, we
            // do some preprocessing on it
            var formattedData = c.formatCapitals(data);

            // If we got here, that means our HTTP call returned successfully
            // and we formatted the data.  So we can resolve the deferred
            // promise and pass back the data
            deferred.resolve(formattedData);
          });

          // Return the promise
          return deferred.promise;
        },

        /**
         * Load the neighbors for the provided country
         * @param  String country Country code
         * @return $promise       Promise that when resolved will be the neighbors
         */
        getNeighbors: function(country) {
          // Set up the deferred promise
          var deferred = $q.defer();

          // Configuration info.
          var config = {
            cache: true,
            params: {
              country: country,
              username: 'atoburen'
            }
          };

          // Make the HTTP request
          var req = $http.get(NEIGHBORS_PATH, config);

          // Set up a callback for when
          req.success(function(data) {
            // Because the data comes back in a property of geonames, we
            // do some preprocessing on it
            var formattedData = c.formatNeighbors(data);

            // If we got here, that means our HTTP call returned successfully
            // and we formatted the data.  So we can resolve the deferred
            // promise and pass back the data
            deferred.resolve(formattedData);
          });

          // Return the promise
          return deferred.promise;
        },

        /**
         * Format the raw data from GeoNames into a nicer format
         * @param  Object d GeoNames JSON object
         * @return Array    Formatted array of GeoNames
         */
        formatCountries: function(d) {
          // Set up a return variable to hold our temp data
          var r = [];

          // Loop through our data, let's use angular's built in function
          angular.forEach(d.geonames, function(name) {
            // Push our new object into the return array
            r.push({
              name       : name.countryName,
              code       : name.countryCode,
              capital    : name.capital,
              area       : name.areaInSqKm,
              population : name.population,
              continent  : name.continentName
            });
          });

          // Return our nicely formatted array
          return r;
        },

        /**
         * Format country data from GeoNames API
         * @param  Object c JSON payload from API
         * @return Object   Formatted country object
         */
        formatCountry: function(c) {
          // Check if we got the correct results
          if (c.geonames.length === 1) {
            return c.geonames[0];
          }

          // If we didn't get correct results, return false
          return false;
        },

        /**
         * Format capital data from GeoNames API
         * @param  Object c JSON payload from API
         * @return Array    Array of capital objects
         */
        formatCapitals: function(c) {
          // Set up a return variable to hold our temp data
          var r = [];

          // Loop through our capitals, remember there can be more than one
          angular.forEach(c.geonames, function(capital) {
            // Push the capital.  Could potentially cherry pick the key/values
            // that we want to include, like we did in formatCountries
            r.push(capital);
          });

          // Return our nicely formatted array
          return r;
        },

        /**
         * Format neighbor data from GeoNames API
         * @param  Object c JSON payload from API
         * @return Array    Array of neighbor objects
         */
        formatNeighbors: function(c) {
          // Set up a return variable to hold our temp data
          var r = [];

          // Loop through our capitals, remember there can be more than one
          angular.forEach(c.geonames, function(neighbor) {
            // Push the neighbor.  Could potentially cherry pick the key/values
            // that we want to include, like we did in formatCountries
            r.push(neighbor);
          });

          // Return our nicely formatted array
          return r;
        }
      };

      return c;
    }])
  .config([ '$routeProvider', function( $routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'home.html'
    })
    .when('/countries', {
      templateUrl: './countries/countryHome.html',
      controller: 'CountryCtrl',
      resolve: {
        countriesData : ['ccRequest', '$route', function(ccRequest, $route) {
          /*
           Now that we've changed the service, we have to update this to use
           the new format.  Also, you weren't doing anything with $route.data
           so there's no need to use it.  Also, it's important to note that
           using resolve here will not let this route continue until all
           promises have been resolved.  This is how you can ensure that all
           your data is loaded before the route is loaded
          return ccRequest($route.data);
          */
          return ccRequest.getAll();
        }]
      }
    })
    // 1) URL is incorrect, missing the leading slash
    // .when('countries/:country/:capital', {
    .when('/countries/:country/:capital', {
      // 2) Invalid template URL, need a forward slash between the . and countries
      // templateUrl: '.countries/countryDetail.html',
      templateUrl: './countries/countryDetail.html',
      controller: 'CountryDetailCtrl',
      resolve: {
        /**
         * Resolve the country that is being loaded
         * @param  Provider $routeParams Route Provider
         * @param  Service ccRequest     CC Service
         * @return Object                Country data
         */
        country: ['$route', 'ccRequest', function($route, ccRequest) {
          // Our route params are stored in $route.current.params.  The :country
          // will be in $route.current.params.country.  We will use this data to pass into
          // our service and load the appropriate country data
          var country = $route.current.params.country;

          // Now we call our service with the country
          return ccRequest.getCountry(country);
        }],

        /**
         * Resolve the captial for the country that is being loaded
         * @param  Provider $routeParams Route Provider
         * @param  Service ccRequest     CC Service
         * @return Object                Country data
         */
        capitals: ['$route', 'ccRequest', function($route, ccRequest) {
          // Again, using our route params we can call our service to get data
          var country = $route.current.params.country;
          var capital = $route.current.params.capital;

          // Now we call our service with the country and capital
          return ccRequest.getCapitals(country, capital);
        }],

        /**
         * Resolve the neighbors for the country that is being loaded
         * @param  Provider $routeParams Route Provider
         * @param  Service ccRequest     CC Service
         * @return Object                Country data
         */
        neighbors: ['$route', 'ccRequest', function($route, ccRequest) {
          // Again, using our route params we can call our service to get data
          var country = $route.current.params.country;

          // Now we call our service with the country and capital
          return ccRequest.getNeighbors(country);
        }]
      }
    });
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
     /*
      4) Let's rewrite this function a bit.  We're going to use the updated
      service.  Remember, controllers should be light, so logic like the parseData
      should go inside your service and not in the controller.
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
    */

    // Remember that using the resolve in your routeProvider will not call
    // this controller and load the HTML partial until all promises are resolved.
    // That means that countriesData contains the exact data that we are expecting
    // so we can immediately start using it.
    $scope.countries = countriesData;
  }])


  .controller('CountryDetailCtrl', ['$scope', 'country', 'capitals', 'neighbors', function($scope, country, capitals, neighbors) {
    $scope.country = country;
    $scope.capitals = capitals;
    $scope.neighbors = neighbors;
  }]);












