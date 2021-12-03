const createError = require('http-errors');
const UserModel = require('../models/user');
const UserModelInstance = new UserModel();

module.exports = class AuthService {

  async register(data) {

    const { userName } = data;

    try {
      // Check if user already exists
      const user = await UserModelInstance.findOneByUsername(userName);

      // If user already exists, reject
      if (user) {
        throw createError(409, 'Email already in use');
      }

      // User doesn't exist, create new user record
      return await UserModelInstance.create(data);

    } catch(err) {
      throw createError(500, err);
    }

  };

  async login(data) {

    const { userName, password } = data;

    try {
      // Check if user exists
      const user = await UserModelInstance.findOneByUsername(userName);

      // If no user found, reject
      if (!user) {
        throw createError(401, 'Incorrect username or password');
      }

      // Check for matching passwords
      if (user.password !== password) {
        throw createError(401, 'Incorrect username or password');
      }

      return user;

    } catch(err) {
      throw createError(500, err);
    }

  };

}