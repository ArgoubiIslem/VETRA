import nc from 'next-connect'
import bcrypt from 'bcryptjs'

import User from '../../../models/User'
import dbConnect from '../../../utils/db'
import { signToken } from '../../../utils/auth'
dbConnect()
const handler = nc()

handler.post(async (req, res) => {
  const user = await User.findOne({ email: req.body.email })

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user)
    res.send({
      token,
      _id: user._id,
      nomP: user.nomP,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(401).send({ message: 'Invalid email or password' })
  }
})

export default handler
