.controller('themeMe', [$resource, function(resource) {
  var self = this;

  self.userHash = {};

  self.getUser = function(email, password, passwordconf, url) {
    self.userHash = {'email': email, 'password': password, 'passwordConf': passwordconf, 'url': url };
  };

  self.makePost = function(url) {
    $http.post('https://agile-waters-4177.herokuapp.com/sounds', url, 'POST').then("Post worked", "You're a scumbag");
  };
}]);
