'use strict';


/**
 * Operation To Login A User
 * Logins In A Registered User
 *
 * user UserModel  (optional)
 * returns UserModel
 **/
exports.registerUser = function(user) {
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

