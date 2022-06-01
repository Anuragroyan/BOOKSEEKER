 const asyncHandler = require('express-async-handler');
 const jwt = require('jsonwebtoken');
 const User = require('../models/User');


 const authMiddleware = asyncHandler(async (req, res, next) => {
   console.log('in m1')
   let token;
   if( req.headers.authorization && req.headers.authorization.startsWith('anirban ')) {
    console.log('in m2')
       try{
        console.log('in m3')
         token = req.headers.authorization.split(' ')[1];
         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
         const user = await User.findById(decoded.id); 
         req.user = user; 
         next();
       }catch (error) {
         res.status(401);
         throw new Error('Not authorised invalid token');
       }
   }
 });


 module.exports = authMiddleware;