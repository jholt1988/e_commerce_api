'use strict';


/**
 * Operation to register a new user
 * creates a new user object/record
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


/**
 * Operation To Login A User
 * Logins In A Registered User
 *
 * userName String userName of user logging in
 * password String password for user logging in
 * returns UserModel
 **/
exports.userLogin = function(userName,password) {
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

