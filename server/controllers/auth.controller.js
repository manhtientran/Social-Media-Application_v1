import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import config from '../config/config.js'

const signin = async (req, res) => {
  try {
    let user = await User.findOne({
      "email": req.body.email
    })

    if (!user)
      return res.status('401').json({
        error: "User not found"
      })

    if (!user.authenticate(req.body.password)) {
      return res.status('401').send({
        error: "Email and password don't match."
      })
    }

    const token = jwt.sign({
      _id: user._id
    }, config.jwtSecret)

    res.cookie("t", token, {
      expire: new Date() + 9999
    })

    return res.json({
      token,
      user: {_id: user._id, name: user.name, email: user.email}
    })
  } catch (err) {
    console.log(err)
    return res.status('401').json({
      error: "Could not sign in"
    })

  }
}

const signout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
    message: "signed out"
  })
}

// const requireSignin = expressJwt({
//   secret: config.jwtSecret,
//   userProperty: 'auth'
// })

const requireSignin = (req, res, next) => {
    try {
      let token = req.headers["authorization"].split(" ")[1];
  
      jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err)
          return res.status(401).json({ message: "User not authenticated" });
  
        req.auth = user;
        next();
      });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong" });
    }
  };
  

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization
}