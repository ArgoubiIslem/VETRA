import {
  TextField,
  Typography,
  Button,
  List,
  ListItem,
} from '@material-ui/core'
import NextLink from 'next/link'
import Link from 'next/link'
import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { Store } from '../utils/Store'
import useStyles from '../utils/styles'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
export default function NewUser() {
  const classes = useStyles()
  const [nomP, setNomP] = useState('')
  const [email, setEmail] = useState('')
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { state, dispatch } = useContext(Store)
  const { redirect } = router.query // login?redirect=/shipping

  const { userInfo } = state
  // useEffect(() => {
  //   if (userInfo) {
  //     router.push('/NewUser')
  //   }
  // }, [])
  const submitHandler = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('le mot de passe ne correspond pas')
    }
    try {
      const { data } = await axios.post('/api/users/register', {
        nomP,
        email,
        password,
      })
      dispatch({ type: 'USER_LOGIN', payload: data })
      // Cookies.set('userInfo', data)
      // router.push(redirect || '/')
      alert('Utilisateur ajouter avec succée')
    } catch (err) {
      alert(err.message)
    }
  }
  return (
    <div title="Register">
      <form onSubmit={submitHandler} className={classes.form}>
        <Typography component="h1" variant="1">
          S'inscrire
          <List>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="nomP"
                label="Nom Prenom"
                inputProps={{ type: 'text' }}
                onChange={(e) => setNomP(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: 'email' }}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="Mot de passe"
                inputProps={{ type: 'password' }}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <TextField
                variant="outlined"
                fullWidth
                id="confirmPassword"
                label="Confirmer Mot de passe"
                inputProps={{ type: 'password' }}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></TextField>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Ajouter
              </Button>
            </ListItem>
          </List>
        </Typography>
      </form>
    </div>
  )
}
