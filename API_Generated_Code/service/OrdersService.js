'use strict';


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

