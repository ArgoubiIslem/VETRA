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

import { Controller, useForm } from 'react-hook-form'
export default function Login() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const classes = useStyles()

  const router = useRouter()

  const { state, dispatch } = useContext(Store)
  const { redirect } = router.query // login?redirect=/shipping

  const { userInfo } = state
  useEffect(() => {
    if (userInfo) {
      router.push('/')
    }
  }, [])
  const submitHandler = async ({ email, password }) => {
    // closeSnackbar()
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      })
      dispatch({ type: 'USER_LOGIN', payload: data })
      Cookies.set('userInfo', data)
      router.push(redirect || '/')
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' })
    }
  }
  return (
    <div title="Login">
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography component="h1" variant="1">
          Login
          <List>
            <ListItem>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    inputProps={{ type: 'email' }}
                    error={Boolean(errors.email)}
                    helperText={
                      errors.email
                        ? errors.email.type === 'pattern'
                          ? 'Email is not valid'
                          : 'Email is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 6,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    label="Password"
                    inputProps={{ type: 'password' }}
                    error={Boolean(errors.password)}
                    helperText={
                      errors.password
                        ? errors.password.type === 'minLength'
                          ? 'Password length is more than 5'
                          : 'Password is required'
                        : ''
                    }
                    {...field}
                  ></TextField>
                )}
              ></Controller>
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Login
              </Button>
            </ListItem>
            <ListItem>
              Vous n'avez pas de compte ?{' '}
              <NextLink href={`/register?redirect=${redirect || '/'}`} passHref>
                <Link>Register</Link>
              </NextLink>
            </ListItem>
          </List>
        </Typography>
      </form>
    </div>
  )
}
