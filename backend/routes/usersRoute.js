const express = require('express');
const asyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const usersRoute = express.Router();
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

usersRoute.post('/register', asyncHandler(async (req, res) => {
   const { name, email, password, genre } = req.body;
   const userExists = await User.findOne({ email: email});
   if (userExists) {
       throw new Error('User Exits');
   }
   const userCreated = await User.create({ email, name, password, genre});
   res.json({
         _id: userCreated._id,
         name: userCreated.name,
         password: userCreated.password,
         email: userCreated.password,
         genre: userCreated.genre,
         token: generateToken(userCreated._id),
   });
})
);

usersRoute.get('/', authMiddleware, asyncHandler(async(req, res) => {
  const users = await User.find({});

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(500);

    throw new Error('No users found at the moment');
  }
   
})
);

usersRoute.post('/login', asyncHandler (async (req, res) => {
    const { email, password } = req.body ;
    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
        res.status(200);

        res.json({
          _id: user._id,
          name: user.name,
          password: user.password,
          email: user.email,
          genre: user.genre,
          currentDownload: user.currentDownload,
          currentLimit: user.currentLimit,
          token: generateToken(user._id),
        });
    } else {
      res.status(401);
      throw new Error('Invalid credentials');
    }
})
);

 usersRoute.put('/update',authMiddleware, asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password || user.password;
    }
    if (req.body.genre) {
      user.genre = req.body.genre || user.genre;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      genre: updatedUser.genre,
      token: generateToken(updatedUser._id),
    });
  }
 })
 );
 
 usersRoute.put(
  '/currentDownload',
  authMiddleware,
  asyncHandler(async (req, res) => {
    console.log('in currentdownload');
    console.log(req.user.id);
    const user = await User.findByIdAndUpdate(req.user.id,{ $inc: { currentDownload: 1 }},{new: true});
    res.send(user)
      // const updateUser = await user.save();
  })
);

 usersRoute.get(
  '/profile',
  authMiddleware,
  asyncHandler(async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.status(404);
      if (!user) throw new Error(`You don't have any profile yet`);
      res.status(200);
      res.send(user);
    } catch (error) {
      res.status(500);
      throw new Error('Server error');
    }
  })
);

usersRoute.put(
  '/profile/update',
  authMiddleware,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
    
      if (req.body.password) {
        user.password = req.body.password || user.password;
      }

      if (req.body.genre) {
        user.genre = req.body.genre || user.genre;
      }
      const updateUser = await user.save();
      res.json({
        _id: updateUser._id,
        name: updateUser.name,
        password: updateUser.password,
        email: updateUser.email,
        genre: updatedUser.genre,
        token: authTokenGenerator(updateUser._id),
      });
    } else {
      res.status(401);
      throw new Error('User Not found');
    }
  })
);



 usersRoute.delete('/:id', (req, res) => {
    res.send('delete route');
 });

 


module.exports = usersRoute;