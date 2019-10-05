require('dotenv').config()
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  //Get token from header 
  const token = req.header('x-auth-token')

  // check if not token 
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded.user
    next()

  } catch (err) {
    res.status(401).json({ msg: 'Invalide Token' })
  }
}

module.exports = auth