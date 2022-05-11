import dbConnect from '../../../utils/db'
import User from '../../../models/User'

import bcrypt from 'bcrypt'

dbConnect()

export default async (req, res) => {
  // validate function
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }
  const valid = (nomP, email, password, cf_password) => {
    if (!nomP || !email || !password) return 'Please add all fields.'

    if (!validateEmail(email)) return 'Invalid emails.'

    if (password.length < 6) return 'Password must be at least 6 characters.'

    if (password !== cf_password) return 'Confirm password did not match.'
  }
  switch (req.method) {
    case 'POST':
      await register(req, res)
      break
  }
}

const register = async (req, res) => {
  try {
    const { nomP, email, password, cf_password } = req.body

    const errMsg = valid(nomP, email, password, cf_password)
    if (errMsg) return res.status(400).json({ err: errMsg })

    const user = await User.findOne({ email })
    if (user) return res.status(400).json({ err: 'This email already exists.' })

    const passwordHash = await bcrypt.hash(password, 12)

    const newUser = new User({
      nomP,
      email,
      password,
      cf_password,
    })

    await newUser.save()
    res.json({ msg: 'Register Success!' })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
}
