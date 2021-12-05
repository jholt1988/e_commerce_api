'use strict';

var utils = require('../utils/writer.js');
var Orders = require('../service/OrdersService');

module.exports.getUserOrderByOrderId = function getUserOrderByOrderId (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  var orderId = req.swagger.params['orderId'].value;
  Orders.getUserOrderByOrderId(userId,orderId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
