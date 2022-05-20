// import React, { useContext } from 'react'
// import { Store } from '../utils/Store'
// import NextLink from 'next/link'
// import Link from 'next/link'
// import Image from 'next/image'
// import axios from 'axios'
// import {
//   Grid,
//   TableContainer,
//   Table,
//   Typography,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Select,
//   MenuItem,
//   Button,
//   Card,
//   List,
//   ListItem,
// } from '@material-ui/core'
// import { useRouter } from 'next/router'
// function Cart() {
//   const router = useRouter()
//   const { state, dispatch } = useContext(Store)
//   const {
//     cart: { cartItems },
//   } = state
//   const updateCartHandler = async (item, quantity) => {
//     const { data } = await axios.get(`/api/products/${item._id}`)
//     if (data.countInStock < quantity) {
//       window.alert('Désolé. Le produit est en rupture de stock')
//       return
//     }
//     dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
//   }
//   const removeItemHandler = (item) => {
//     dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
//   }

//   return (
//     <div>
//       <div className="container mx-auto mt-10">
//         <div className="my-10 flex shadow-md">
//           <div className="w-3/4 bg-white px-10 py-10">
//             <div className="flex justify-between border-b pb-8">
//               <h1 className="text-2xl font-semibold">Reaction</h1>
//             </div>
//             {cartItems.length === 0 ? (
//               <div>
//                 Pas de rection.{' '}
//                 <NextLink href="/" passHref>
//                   <Link>Aller faire les reactions</Link>
//                 </NextLink>
//               </div>
//             ) : (
//               <div>
//                 <Grid container spacing={1}>
//                   <Grid item md={9} xs={12}>
//                     <TableContainer>
//                       <Table>
//                         <TableHead>
//                           <TableRow>
//                             <TableCell>Image</TableCell>
//                             <TableCell>Produit</TableCell>
//                             <TableCell align="right">Quantité</TableCell>
//                             <TableCell align="right">Prix</TableCell>
//                             <TableCell align="right">Action</TableCell>
//                           </TableRow>
//                         </TableHead>
//                         <TableBody>
//                           {cartItems.map((item) => (
//                             <TableRow key={item._id}>
//                               <TableCell>
//                                 <NextLink
//                                   href={`/product/${item.nom}`}
//                                   passHref
//                                 >
//                                   <Link>
//                                     <Image
//                                       src={item.image}
//                                       alt={item.nom}
//                                       width={50}
//                                       height={50}
//                                     ></Image>
//                                   </Link>
//                                 </NextLink>
//                               </TableCell>
//                               <TableCell>
//                                 <NextLink
//                                   href={`/product/${item.nom}`}
//                                   passHref
//                                 >
//                                   <Link>
//                                     <Typography>{item.nom}</Typography>
//                                   </Link>
//                                 </NextLink>
//                               </TableCell>
//                               <TableCell align="right">
//                                 <Select
//                                   value={item.quantity}
//                                   onChange={(e) =>
//                                     updateCartHandler(item, e.target.value)
//                                   }
//                                 >
//                                   {[...Array(item.countInStock).keys()].map(
//                                     (x) => (
//                                       <MenuItem key={x + 1} value={x + 1}>
//                                         {x + 1}
//                                       </MenuItem>
//                                     )
//                                   )}
//                                 </Select>
//                               </TableCell>
//                               <TableCell align="right">${item.prix}</TableCell>
//                               <TableCell align="right">
//                                 <Button
//                                   variant="contained"
//                                   color="secondary"
//                                   onClick={() => removeItemHandler(item)}
//                                 >
//                                   x
//                                 </Button>
//                               </TableCell>
//                             </TableRow>
//                           ))}
//                         </TableBody>
//                       </Table>
//                     </TableContainer>
//                   </Grid>
//                   <Grid item md={3} xs={12}>
//                     <Card>
//                       <List>
//                         <ListItem>
//                           <Typography variant="h6">
//                             Total(
//                             {cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
//                             Produits):DT
//                             {cartItems.reduce(
//                               (a, c) => a + c.quantity * c.prix,
//                               0
//                             )}
//                           </Typography>
//                         </ListItem>
//                         <ListItem>
//                           <Button
//                             variant="contained"
//                             color="primary"
//                             fullWidth
//                             onClick={checkoutHandler}
//                           >
//                             Vérifier
//                           </Button>
//                         </ListItem>
//                       </List>
//                     </Card>
//                   </Grid>
//                 </Grid>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart
