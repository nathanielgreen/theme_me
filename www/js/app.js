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
.controller('themeMe', function($http, $sce) {
  var self = this;

  self.searchResults = [];

  self.userHash = {};

  self.themeSong = 'https://w.soundcloud.com/player/?url=http://swagadoodles.com';

  self.getUser = function(email, password, passwordconf) {
    self.userHash = {'email': email, 'password': password, 'passwordConf': passwordconf};
  };

  self.makePost = function(url) {
    var newUrl = { 'url': url };
    $http.post('http://agile-waters-4177.herokuapp.com/sounds', newUrl, 'POST').then(console.log("Post worked"), console.log("You're a scumbag"));
  };

  self.makeGet = function(id) {

    $http({
      method: 'GET',
      url: 'http://agile-waters-4177.herokuapp.com/sounds/'+id
    }).then(function successCallback(response) {
      var data = angular.fromJson(response);
        console.log(response.data.url);
    });
  };



  self.searchSC = function(searchQuery) {
    SC.initialize({
      client_id: '8e74002fd2542f89231c5133c2a54833'
    });

    SC.get('/tracks', {
      q: searchQuery
    }).then(function(tracks) {
      self.searchResults = tracks;
    });
  };

  self.setThemeSong = function(email, password, passwordconf, songurl) {
    var postData = { 'email':email, 'password': password, 'passwordconf': passwordconf, 'url': songurl };
    $http.post('http://agile-waters-4177.herokuapp.com/sounds', postData, 'POST').then("Post worked", "You're a scumbag");
  };

  self.mainSong = function(id) {
    $http({
      method: 'GET',
      url: 'http://agile-waters-4177.herokuapp.com/sounds/'+id
    }).then(function successCallback(response) {
      var data = angular.fromJson(response);
      self.themeSong = 'https://w.soundcloud.com/player/?url=' + response.data.url;
    });

    self.trustSrc = function(src) {
      return $sce.trustAsResourceUrl(src);
    };
  };
});
