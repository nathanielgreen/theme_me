// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('thememe', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('themeMe', function($http) {
  var self = this;

  self.userHash = {};

  self.getUser = function(email, password, passwordconf, url) {
    self.userHash = {'email': email, 'password': password, 'passwordConf': passwordconf, 'url': url };
  };

  self.makePost = function(url) {
    var newUrl = { 'url': url };
    $http.post('http://agile-waters-4177.herokuapp.com/sounds', newUrl, 'POST').then("Post worked", "You're a scumbag");
  };

  self.makeGet = function() {
    $http.get('http://agile-waters-4177.herokuapp.com/sounds', 'GET').then("Made a cool get request", "You're a scumbag");
  };
});
