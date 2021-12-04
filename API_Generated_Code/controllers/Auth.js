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
