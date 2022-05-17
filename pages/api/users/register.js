import nc from 'next-connect'
import bcrypt from 'bcryptjs'
import User from '../../../models/User'
import dbConnect from '../../../utils/db'
import { signToken } from '../../../utils/auth'
dbConnect()
const handler = nc()

handler.post(async (req, res) => {
  const newUser = new User({
    nomP: req.body.nomP,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
  })
  const user = await newUser.save()

  res.send({
    _id: user._id,
    nomP: user.nomP,
    email: user.email,
    isAdmin: user.isAdmin,
  })
})

export default handler
