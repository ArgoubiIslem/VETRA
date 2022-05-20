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

function ProfileAd() {
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
    <div title="ProfileAd">
      <Grid container spacing={1}>
        <Grid item md={3} xs={12}>
          <Card className={classes.section}>
            <List>
              <NextLink href="/profile" passHref>
                <ListItem selected button component="a">
                  <ListItemText primary="User Profile"></ListItemText>
                </ListItem>
              </NextLink>
              <NextLink href="/order-history" passHref>
                <ListItem button component="a">
                  <ListItemText primary="Order History"></ListItemText>
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
                                  ? 'La longueur du nom est supérieure à 1'
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
                            ' La longueur du mot de passe est supérieure à 5',
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
                                ? 'La longueur du mot de passe est supérieure à 5'
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
                            'La longueur du mot de passe est supérieure à 5',
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
                                ? 'La longueur du mot de passe est supérieure à 5'
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

export default dynamic(() => Promise.resolve(ProfileAd), { ssr: false })

// import axios from 'axios'
// import dynamic from 'next/dynamic'
// import { useRouter } from 'next/router'
// import NextLink from 'next/link'
// import React, { useEffect, useContext } from 'react'
// import {
//   Grid,
//   List,
//   ListItem,
//   Typography,
//   Card,
//   Button,
//   ListItemText,
//   TextField,
// } from '@material-ui/core'
// import { getError } from '../utils/error'
// import { Store } from '../utils/Store'
// import useStyles from '../utils/styles'
// import { Controller, useForm } from 'react-hook-form'
// import { useSnackbar } from 'notistack'
// import Cookies from 'js-cookie'
// function profileAd() {
//   const { state, dispatch } = useContext(Store)
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//     setValue,
//   } = useForm()
//   const { enqueueSnackbar, closeSnackbar } = useSnackbar()
//   const router = useRouter()
//   const classes = useStyles()
//   const { userInfo } = state

//   useEffect(() => {
//     if (!userInfo) {
//       return router.push('/login')
//     }
//     setValue('name', userInfo.nomP)
//     setValue('email', userInfo.email)
//   }, [])
//   const submitHandler = async ({ nomP, email, password, confirmPassword }) => {
//     closeSnackbar()
//     if (password !== confirmPassword) {
//       enqueueSnackbar("Passwords don't match", { variant: 'error' })
//       return
//     }
//     try {
//       const { data } = await axios.put(
//         '/api/users/profile',
//         {
//           nomP,
//           email,
//           password,
//         },
//         { headers: { authorization: `Bearer ${userInfo.token}` } }
//       )
//       dispatch({ type: 'USER_LOGIN', payload: data })
//       Cookies.set('userInfo', data)

//       enqueueSnackbar('Profile updated successfully', { variant: 'success' })
//     } catch (err) {
//       enqueueSnackbar(getError(err), { variant: 'error' })
//     }
//   }
//   return (
//     <div>
//       <link
//         href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
//         rel="stylesheet"
//       />
//       <script
//         src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
//         defer
//       ></script>

//       <div className="bg-gray-100">
//         <div className="bg-main-color w-full text-white">
//           <div
//             x-data="{ open: false }"
//             className="mx-auto flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
//           >
//             <div className="flex flex-row items-center justify-between p-4">
//               <button className="focus:shadow-outline rounded-lg focus:outline-none md:hidden">
//                 <svg
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   className="h-6 w-6"
//                 >
//                   <path
//                     x-show="!open"
//                     fill-rule="evenodd"
//                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                     clip-rule="evenodd"
//                   ></path>
//                   <path
//                     x-show="open"
//                     fill-rule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clip-rule="evenodd"
//                   ></path>
//                 </svg>
//               </button>
//             </div>

//             <div className="group inline-block"></div>
//           </div>
//         </div>
//         {/* <!-- End of Navbar --> */}

//         <div className="container mx-auto my-5 p-5">
//           <div className="no-wrap md:-mx-2 md:flex ">
//             {/* <!-- Left Side --> */}
//             <div className="w-full md:mx-2 md:w-3/12">
//               {/* <!-- End of profile card --> */}
//               <div className="my-4"></div>
//               {/* <!-- Friends card --> */}

//               {/* <!-- End of friends card --> */}
//             </div>
//             {/* <!-- Right Side --> */}
//             <div className="mx-2 h-64 w-full md:w-9/12">
//               {/* <!-- Profile tab --> */}
//               {/* <!-- About Section --> */}
//               <div className="rounded-sm bg-white p-3 shadow-sm">
//                 <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
//                   <span clas="text-green-500">
//                     <svg
//                       className="h-5 text-indigo-600"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                         stroke-width="2"
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       />
//                     </svg>
//                   </span>
//                   <span className="tracking-wide text-indigo-600">
//                     à propos
//                   </span>
//                 </div>
//                 <div className="text-gray-700">
//                   <div className="grid text-sm md:grid-cols-2">
//                     <div className="grid grid-cols-2">
//                       <div className="px-4 py-2 font-semibold"> Nom Prénom</div>
//                       <div className="px-4 py-2">Jane</div>
//                     </div>

//                     <div className="grid grid-cols-2">
//                       <div className="px-4 py-2 font-semibold">Email</div>
//                       <div className="px-4 py-2">
//                         <a
//                           className="text-blue-800"
//                           href="mailto:jane@example.com"
//                         >
//                           jane@example.com
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* <!-- End of about section --> */}

//               <div className="my-4"></div>

//               {/* <!-- Experience and education --> */}
//               <div className="rounded-sm bg-white p-3 shadow-sm">
//                 <div className="">
//                   <div>
//                     <div>
//                       <div class="mt-5 md:col-span-2 md:mt-0">
//                         <form onSubmit={handleSubmit(submitHandler)}>
//                           <div class="shadow sm:overflow-hidden sm:rounded-md">
//                             <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
//                               <div class="grid grid-cols-3 gap-6">
//                                 <div class="col-span-3 sm:col-span-2">
//                                   <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
//                                     <span clas="text-green-500">
//                                       <svg
//                                         class="h-6 w-6 text-indigo-600"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                       >
//                                         <path
//                                           stroke-linecap="round"
//                                           stroke-linejoin="round"
//                                           stroke-width="2"
//                                           d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
//                                         />
//                                       </svg>
//                                     </span>
//                                     <span className="tracking-wide text-indigo-600">
//                                       Modifier profile
//                                     </span>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </form>
//                       </div>
//                     </div>

//                     <div class="hidden sm:block" aria-hidden="true">
//                       <div class="py-5">
//                         <div class="border-t border-gray-200"></div>
//                       </div>
//                     </div>

//                     <div class="mt-10 sm:mt-0">
//                       <div class="md:grid md:grid-cols-3 md:gap-6">
//                         <div class="md:col-span-1">
//                           <div class="px-4 sm:px-0">
//                             <h3 class="text-lg font-medium leading-6 text-indigo-600">
//                               Renseignements personnels
//                             </h3>
//                             <p class="mt-1 text-sm text-gray-600">
//                               Utilisez une adresse permanente où vous pouvez
//                               recevoir poster.
//                             </p>
//                           </div>
//                         </div>
//                         <div class="mt-5 md:col-span-2 md:mt-0">
//                           <form action="#" method="POST">
//                             <div class="overflow-hidden shadow sm:rounded-md">
//                               <div class="bg-white px-4 py-5 sm:p-6">
//                                 <div class="grid grid-cols-6 gap-6">
//                                   <div class="col-span-6 sm:col-span-3">
//                                     <label
//                                       for="first-name"
//                                       class="block text-sm font-medium text-gray-700"
//                                     >
//                                       Nom Prénom
//                                     </label>
//                                     <input
//                                       type="text"
//                                       name="first-name"
//                                       id="first-name"
//                                       autocomplete="given-name"
//                                       class="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     />
//                                   </div>

//                                   <div class="col-span-6 sm:col-span-4">
//                                     <label
//                                       for="email-address"
//                                       class="block text-sm font-medium text-gray-700"
//                                     >
//                                       Email
//                                     </label>
//                                     <input
//                                       type="text"
//                                       name="email-address"
//                                       id="email-address"
//                                       autocomplete="email"
//                                       class="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     />
//                                   </div>

//                                   <div class="col-span-6 sm:col-span-4">
//                                     <label
//                                       for="email-address"
//                                       class="block text-sm font-medium text-gray-700"
//                                     >
//                                       Mot de passe
//                                     </label>
//                                     <input
//                                       type="password"
//                                       name="password"
//                                       id="password"
//                                       autocomplete="email"
//                                       class="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     />
//                                   </div>
//                                   <div class="col-span-6 sm:col-span-4">
//                                     <label
//                                       for="email-address"
//                                       class="block text-sm font-medium text-gray-700"
//                                     >
//                                       confirmer mot de passe
//                                     </label>
//                                     <input
//                                       type="password"
//                                       name="confirmpassword"
//                                       id="confirmpassword"
//                                       autocomplete="email"
//                                       class="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     />
//                                   </div>
//                                 </div>
//                               </div>
//                               <div class=" bg-gray-50 px-4 py-3 text-right sm:px-6">
//                                 <button
//                                   type="submit"
//                                   class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                                 >
//                                   Modifier
//                                 </button>
//                               </div>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     </div>

//                     <div class="hidden sm:block" aria-hidden="true">
//                       <div class="py-5">
//                         <div class="border-t border-gray-200"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <!-- End of Experience and education grid --> */}
//               </div>
//               {/* <!-- End of profile tab --> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default profileAd
