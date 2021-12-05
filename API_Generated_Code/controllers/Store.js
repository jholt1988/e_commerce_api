'use strict';

var utils = require('../utils/writer.js');
var Store = require('../service/StoreService');

module.exports.addInventoryItem = function addInventoryItem (req, res, next) {
  var inventoryObject = req.swagger.params['inventoryObject'].value;
  Store.addInventoryItem(inventoryObject)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllInventoryItems = function getAllInventoryItems (req, res, next) {
  Store.getAllInventoryItems()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
