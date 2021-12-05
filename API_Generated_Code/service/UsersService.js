'use strict';


/**
 * Find user by userName
 * Returns a user based on userName
 *
 * userName String userName of current user
 * returns UserModel
 **/
exports.getUserByUserName = function(userName) {
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
 * Get a single order
 * Get a single order object
 *
 * userId UUID 
 * orderId Integer 
 * returns UserOrdersModel
 **/
exports.getUserOrderByOrderId = function(userId,orderId) {
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
 * Get a list of user orders by userId
 * Get a collection of user order
 *
 * userId UUID 
 * returns List
 **/
exports.getUserOrders = function(userId) {
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


/**
 * Modifies a user object
 * Updates a user object
 *
 * userName String userName of current user
 * user UserModel  (optional)
 * returns UserModel
 **/
exports.updateUser = function(userName,user) {
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

