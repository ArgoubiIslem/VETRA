import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

import { Store } from '../utils/Store'
import useStyles from '../utils/styles'
import Cookies from 'js-cookie'
import { Controller, useForm } from 'react-hook-form'
import CheckoutWizard from '../components/CheckoutWizard'

export default function Shipping() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm()
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const {
    userInfo,
    cart: { shippingAddress },
  } = state
  const { location } = shippingAddress
  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping')
    }
    setValue('fullName', shippingAddress.fullName)
    setValue('address', shippingAddress.address)
    setValue('tel', shippingAddress.tel)
    setValue('city', shippingAddress.city)
    setValue('postalCode', shippingAddress.postalCode)
    setValue('country', shippingAddress.country)
  }, [])

  const classes = useStyles()
  const submitHandler = ({
    fullName,
    address,
    tel,
    city,
    postalCode,
    country,
  }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, tel, city, postalCode, country, location },
    })
    Cookies.set('shippingAddress', {
      fullName,
      address,
      tel,
      city,
      postalCode,
      country,
      location,
    })
    router.push('/payment')
  }

  const chooseLocationHandler = () => {
    const fullName = getValues('fullName')
    const address = getValues('address')
    const tel = getValues('tel')
    const city = getValues('city')
    const postalCode = getValues('postalCode')
    const country = getValues('country')
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, tel, city, postalCode, country },
    })
    Cookies.set('shippingAddress', {
      fullName,
      address,
      tel,
      city,
      postalCode,
      country,
      location,
    })
    router.push('/map')
  }
  return (
    <div title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form onSubmit={handleSubmit(submitHandler)}>
        <Typography component="h1" variant="h6">
          Adresse de livraison
        </Typography>
        <List>
          <ListItem>
            <Controller
              name="fullName"
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
                  id="fullName"
                  label="Nom complet"
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === 'minLength'
                        ? 'La longueur du nom complet est sup??rieure ?? 1'
                        : 'Nom complet est obligatoire'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="address"
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
                  id="address"
                  label="Addresse"
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === 'minLength'
                        ? "La longueur de l'adresse est sup??rieure ?? 1"
                        : 'Addresse est obligatoire'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="tel"
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
                  id="tel"
                  label="Tel"
                  error={Boolean(errors.tel)}
                  helperText={
                    errors.address
                      ? errors.address.type === 'minLength'
                        ? "La longueur de l'adresse est sup??rieure ?? 1"
                        : 'Addresse est obligatoire'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
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
                  id="city"
                  label="la ville"
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === 'minLength'
                        ? 'La longueur de la ville est sup??rieure ?? 1'
                        : 'la ville est obligatoire'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="postalCode"
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
                  id="postalCode"
                  label="code postal"
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? errors.postalCode.type === 'minLength'
                        ? ' La longueur du code postal est sup??rieure ?? 1'
                        : 'Le code postal est obligatoire'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="country"
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
                  id="country"
                  label="Pays"
                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === 'minLength'
                        ? 'La longueur du pays est sup??rieure ?? 1'
                        : 'Le pays est obligatoire'
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
              type="button"
              onClick={chooseLocationHandler}
            >
              Choisissez sur map
            </Button>
            <Typography>
              {location?.lat && `${location?.lat}, ${location?.lat}`}
            </Typography>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Continuez
            </Button>
          </ListItem>
        </List>
      </form>
    </div>
  )
}
