'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.registerUser = function registerUser (req, res, next) {
  var user = req.swagger.params['user'].value;
  Auth.registerUser(user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userLogin = function userLogin (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  var password = req.swagger.params['password'].value;
  Auth.userLogin(userName,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
