import { useRouter } from 'next/router'
import { useSnackbar } from 'notistack'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Breadcrumb } from 'semantic-ui-react'
import Footer from '../../components/Footer'
import Headers from '../../components/Headers'
import { Store } from '../../utils/Store'
import useStyles from '../../utils/styles'
import Link from 'next/link'

function SousCat() {
  const classNamees = useStyles()
  const router = useRouter()
  const [productsData, setProductsData] = useState(null)
  const { state, dispatch } = useContext(Store)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showRecuperation, setShowRecuperation] = useState(false)
  const { cart, userInfo } = state
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [nomP, setNomP] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [sous, setSous] = useState()
  const { redirect } = router.query // login?redirect=/shipping

  const submitHandler = async ({ email, password }) => {
    closeSnackbar()
    try {
      const { data } = await axios.post('/api/users/login', {
        email,
        password,
      })
      dispatch({ type: 'USER_LOGIN', payload: data })
      Cookies.set('userInfo', data)
      router.push(redirect || '/')
      setShowLogin(false)
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' })
    }
  }

  const [anchorEl, setAnchorEl] = useState(null)
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null)
    if (redirect) {
      router.push(redirect)
    }
  }
  const logoutClickHandler = () => {
    setAnchorEl(null)
    dispatch({ type: 'USER_LOGOUT' })
    Cookies.remove('userInfo')
    Cookies.remove('cartItems')
    Cookies.remove('shippinhAddress')
    Cookies.remove('paymentMethod')
    router.push('/')
  }

  const submitHandler2 = async (e) => {
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
      Cookies.set('userInfo', data)
      router.push(redirect || '/')
      alert('Connexion réussie')
    } catch (err) {
      alert(err.message)
    }
  }
  useEffect(() => {
    setSous(router.query.sousCat)
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/products')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setProductsData(result['data'])

        return result
      } catch (err) {
        console.log(err)
      }
    }
    // declare the async data fetching function

    // call the function
    getUser()
      // make sure to catch any error
      .catch(console.error)
  }, [])

  // Filter

  const filterResult = (catItem) => {
    const result = productsData?.filter((curData) => {
      return curData.sousCategorie === catItem
    })
    setProductsData(result)
  }

  return (
    <div>
      <Headers />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="bg-white">
        <main className="my-8">
          <Breadcrumb />
          <div className="container mx-auto px-6">
            <div className=" flex justify-end space-x-0.5">
              <div className="flex-inline w-1/2 space-y-0.5">
                <div className="item order-first  h-60 ">
                  <div className="item h-28">
                    <div className="container mx-auto flex px-6 ">
                      <div className="bg-white-100 fixed inset-y-0 left-0 z-30 w-64  transform transition duration-300 lg:static lg:translate-x-0">
                        <nav className="mt-5">
                          <ul>
                            <li>
                              <div className=" absolute mb-6 flex h-64  max-w-xs flex-col justify-between   bg-white py-5 px-4 ">
                                {' '}
                                <fieldset>
                                  <span className="mb-1 p-2 font-semibold text-gray-800">
                                    CATÉGORIES
                                  </span>
                                  <br></br>
                                  <br></br>

                                  <div className="mb-4 flex items-center">
                                    {/* <select
                                className="custom-select text-capitalize"
                                value={category}
                                onChange={handleCategory}
                              >
                                <option value="all">All Products</option> */}

                                    {productsData
                                      ? productsData?.map(function (
                                          product,
                                          i
                                        ) {
                                          if (product.categorie == 'Femme') {
                                            return (
                                              <div key={i}>
                                                <button
                                                  onClick={() =>
                                                    filterResult(
                                                      router.query.SousCat
                                                    )
                                                  }
                                                >
                                                  {product.sousCategorie}
                                                </button>
                                                <br></br>
                                              </div>
                                            )
                                          }
                                          return null
                                        })
                                      : null}
                                  </div>
                                </fieldset>
                              </div>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {productsData
                  ? productsData?.map(function (product, i) {
                      if (product?.categorie == 'Femme') {
                        if (product?.sousCategorie == sous) {
                          return (
                            <div className="mt-10 flex w-full " key={i}>
                              <div className=" mx-auto  w-full max-w-sm gap-10 bg-gray-200">
                                <div className="min-h-80  aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                                  <img
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                                    src={product.image}
                                    alt=""
                                  />
                                </div>
                                <div className="px-5 py-3">
                                  <span className="mt-2 text-gray-500">
                                    {product.nom}
                                  </span>
                                  <br></br>
                                  <span className="mt-2 text-gray-500">
                                    {product.prix} DT
                                  </span>
                                  <Link href={`/${product._id}/DetailPage`}>
                                    <span className="mt-4 flex w-full items-center justify-center rounded bg-yellow-400 py-1 hover:bg-yellow-500">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                      </svg>
                                      <button className="font-semibold text-gray-800">
                                        Ajouter au panier
                                      </button>
                                    </span>
                                  </Link>
                                  <br></br>
                                </div>
                              </div>
                            </div>
                          )
                        }
                        return null
                      }
                      return null
                    })
                  : null}
              </div>
            </div>
            {/* <div className="flex justify-center">
          <div className="mt-8 flex rounded-md">
            <a
              href="#"
              className="ml-0 rounded-l border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>Previous</span>
            </a>
            <a
              href="#"
              className="border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>1</span>
            </a>
            <a
              href="#"
              className="border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>2</span>
            </a>
            <a
              href="#"
              className="border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>3</span>
            </a>
            <a
              href="#"
              className="rounded-r border border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
            >
              <span>Next</span>
            </a>
          </div>
        </div> */}
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default SousCat
