import nc from 'next-connect'
import bcrypt from 'bcryptjs'
import User from '../../../models/User'
import dbConnect from '../../../utils/db'
import { signToken, isAuth } from '../../../utils/auth'
dbConnect()
const handler = nc()
handler.use(isAuth)

handler.put(async (req, res) => {
  await dbConnect()
  const user = await User.findById(req.user._id)
  user.nomP = req.body.nomP
  user.email = req.body.email
  user.password = req.body.password
    ? bcrypt.hashSync(req.body.password)
    : user.password
  await user.save()

  res.send({
    _id: user._id,
    nomP: user.nomP,
    email: user.email,
    isAdmin: user.isAdmin,
  })
})

export default handler
