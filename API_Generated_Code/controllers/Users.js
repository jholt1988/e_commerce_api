'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.getUserByUserName = function getUserByUserName (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  Users.getUserByUserName(userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserOrderByOrderId = function getUserOrderByOrderId (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var orderId = req.swagger.params['orderId'].value;
  Users.getUserOrderByOrderId(userId,orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserOrders = function getUserOrders (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  Users.getUserOrders(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  var userName = req.swagger.params['userName'].value;
  var user = req.swagger.params['user'].value;
  Users.updateUser(userName,user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
