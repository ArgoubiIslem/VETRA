import axios from 'axios'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import React, { useEffect, useContext } from 'react'
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
  ListItemText,
  TextField,
} from '@material-ui/core'
import { getError } from '../utils/error'
import { Store } from '../utils/Store'
import useStyles from '../utils/styles'
import { Controller, useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import Cookies from 'js-cookie'

function Profile() {
  const { state, dispatch } = useContext(Store)
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const router = useRouter()
  const classes = useStyles()
  const { userInfo } = state

  useEffect(() => {
    if (!userInfo) {
      return router.push('/login')
    }
    setValue('name', userInfo.nomP)
    setValue('email', userInfo.email)
  }, [])
  const submitHandler = async ({ nomP, email, password, confirmPassword }) => {
    closeSnackbar()
    if (password !== confirmPassword) {
      enqueueSnackbar("Passwords don't match", { variant: 'error' })
      return
    }
    try {
      const { data } = await axios.put(
        '/api/users/profile',
        {
          nomP,
          email,
          password,
        },
        { headers: { authorization: `Bearer ${userInfo.token}` } }
      )
      dispatch({ type: 'USER_LOGIN', payload: data })
      Cookies.set('userInfo', data)

      enqueueSnackbar('Profile updated successfully', { variant: 'success' })
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' })
    }
  }
  return (
    <div title="Profile">
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <NextLink href="/profile" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="Profile"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/order-history" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Historique de commandes"></ListItemText>
                </ListItem>
              </NextLink>
            </List>
          </Card>
        </Grid>
        <Grid item md={9} xs={12}>
          <Card className={classes.section}>
            <List>
              <ListItem>
                <Typography component="h1" variant="h6">
                  Profile
                </Typography>
              </ListItem>
              <ListItem>
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  className={classes.form}
                >
                  <List>
                    <ListItem>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                          minLength: 2,
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="name"
                            label="Nom"
                            inputProps={{ type: 'name' }}
                            error={Boolean(errors.nomP)}
                            helperText={
                              errors.nomP
                                ? errors.nomP.type === 'minLength'
                                  ? 'La longueur du nom est sup??rieure ?? 1'
                                  : 'Nom est obligatoire'
                                : ''
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
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
                                  ? " L'email n'est pas valideEmail is not valid"
                                  : 'Email est obligatoire'
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
                          validate: (value) =>
                            value === '' ||
                            value.length > 5 ||
                            ' La longueur du mot de passe est sup??rieure ?? 5',
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="password"
                            label="Mot de passe"
                            inputProps={{ type: 'password' }}
                            error={Boolean(errors.password)}
                            helperText={
                              errors.password
                                ? 'La longueur du mot de passe est sup??rieure ?? 5'
                                : ''
                            }
                            {...field}
                          ></TextField>
                        )}
                      ></Controller>
                    </ListItem>
                    <ListItem>
                      <Controller
                        name="confirmPassword"
                        control={control}
                        defaultValue=""
                        rules={{
                          validate: (value) =>
                            value === '' ||
                            value.length > 5 ||
                            'La longueur du mot de passe est sup??rieure ?? 5',
                        }}
                        render={({ field }) => (
                          <TextField
                            variant="outlined"
                            fullWidth
                            id="confirmPassword"
                            label="Confirmer mot de passe"
                            inputProps={{ type: 'password' }}
                            error={Boolean(errors.confirmPassword)}
                            helperText={
                              errors.password
                                ? 'La longueur du mot de passe est sup??rieure ?? 5'
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
                        Modifier
                      </Button>
                    </ListItem>
                  </List>
                </form>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default dynamic(() => Promise.resolve(Profile), { ssr: false })
