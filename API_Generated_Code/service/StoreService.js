'use strict';


/**
 * Adds a new inventory object to database
 * Adds new inventory item
 *
 * inventoryObject InventoryModel 
 * returns InventoryModel
 **/
exports.addInventoryItem = function(inventoryObject) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a complete list of items in inventory
 * Get a complete list of inventoryItem objects
 *
 * returns List
 **/
exports.getAllInventoryItems = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

