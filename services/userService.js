const UserModel = require('../models/user');
const UserModelInstance = new UserModel();

module.exports = class UserService {
    async get(data) {
        const {id} = data;

     try{
         //check to see if user exist
         const user = await UserModelInstance.findOneById(id)

         //if user doesn't exist throw err
         if(!user){
             throw console.error(404, 'user not found');
         }

         return user
     } catch(err){
         throw err;
     }
    };

    async update(data){
        try {
            // Check if user already exists
            const user = await UserModelInstance.update(data);
      
            return user;
      
          } catch(err) {
            throw err;
          }
      
        };
      
      }
    