import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import NewProduct from './NewProduct'
import { useRouter } from 'next/router'
import { Confirm, Button, Loader } from 'semantic-ui-react'
import EditProduct from '/pages/[id]/EditProduct'
function Produits() {
  const [showPromo, setShowPromo] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [productsData, setProductsData] = useState(null)
  const [newProduct, setNewProduct] = useState(false)
  const [updateProduct, setUpdateProduct] = useState(false)
  const [productId, setProductId] = useState()
  const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [promosData, setPromosData] = useState(null)
  const [form, setForm] = useState({
    Product: '',
    dateDebut: '',
    dateFin: '',
    remise: 0,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()
  // Add Promo
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys')
      if (Object.keys(errors).length === 0) {
        createPromo()
      } else {
        alert('please fill the required fields !')
      }
    }
  }, [isSubmitting])
  const createPromo = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('http://localhost:3000/api/Promos', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
      setTimeout(() => {
        setIsLoading(false)
        alert('creation avec success')
      }, 500)
      console.log('created !' + JSON.stringify(form))
      // router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true)
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  // Delete Product
  useEffect(() => {
    if (isDeleting) {
      deleteProduct()
    }
  }, [isDeleting])

  const open = () => setConfirm(true)

  const close = () => setConfirm(false)

  const deleteProduct = async () => {
    const id = router.query.id
    try {
      const deleted = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'Delete',
      })

      // router.push("/");
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    close()
  }

  useEffect(() => {
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

  const filterResult = (catItem) => {
    const result = productsData?.filter((curData) => {
      return curData.categorie === catItem
    })
    setProductsData(result)
  }
  const filterResult2 = (catItem) => {
    const result = filterResult('Femme').filter((curData) => {
      return curData.sousCategorie === catItem
    })
    setProductsData(result)
  }

  return (
    <div className="w-full ">
      <h3 className="mt-8 text-3xl font-medium text-gray-700"> Les Produits</h3>
      <br></br>
      <br></br>

      <div class="group -mt-9 ml-2 inline-block h-9">
        <div class="mx-auto max-w-md">
          <div class="relative">
            <div class="flex h-10 items-center rounded border border-gray-200 bg-white">
              <input
                value="Categorie"
                name="select"
                class="w-full appearance-none px-4 text-gray-800 outline-none"
                checked
              />

              <button class="cursor-pointer text-gray-300 outline-none transition-all hover:text-gray-600 focus:outline-none">
                <svg
                  class="mx-2 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <label
                for="show_more"
                class="cursor-pointer border-l border-gray-200 text-gray-300 outline-none transition-all hover:text-gray-600 focus:outline-none"
              >
                <svg
                  class="h-4 w-4 transform  fill-current transition duration-150 ease-in-out group-hover:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </label>
            </div>

            <input
              type="checkbox"
              name="show_more"
              id="show_more"
              class="peer hidden"
              checked
            />
            <div class="duration-250 absolute  mt-1 hidden w-full scale-0 transform flex-col overflow-hidden rounded border border-gray-200 bg-white shadow transition ease-in-out group-hover:scale-100 peer-checked:flex">
              <div class="block border-l-4 border-transparent p-2 hover:bg-gray-200 group-hover:border-blue-600">
                <button onClick={() => filterResult('Femme')}>Femme</button>
              </div>
              <div class="block border-l-4 border-transparent p-2 hover:bg-gray-200 group-hover:border-blue-600">
                <button onClick={() => filterResult('Homme')}>Homme</button>
              </div>
              <div class="block border-l-4 border-transparent p-2 hover:bg-gray-200 group-hover:border-blue-600">
                <button onClick={() => filterResult('Enfant')}>Enfant</button>
              </div>
              <div class="block border-l-4 border-transparent p-2 hover:bg-gray-200 group-hover:border-blue-600">
                <button onClick={() => setProductsData(productsData)}>
                  Tous
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-40 right-4  ">
        {/* <Link
          href="/NewProduct"
          className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
        > */}
        <button
          onClick={() =>
            !newProduct ? setNewProduct(true) : setNewProduct(false)
          }
          className="flex transform rounded-md bg-blue-600 px-4 py-3 text-white shadow-lg outline-none transition-transform focus:ring-4 active:scale-y-75"
        >
          <svg
            className="h-6 w-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <line x1="12" y1="5" x2="12" y2="19" />{' '}
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span className="ml-2">Créer produit</span>
        </button>
        {/* </Link> */}
      </div>

      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script>

      <div className="mx-auto grid w-full justify-evenly gap-6 px-6">
        <div>
          <div
            class="mx-auto -mt-9 flex max-w-md items-center rounded-lg bg-white "
            x-data="{ search: '' }"
          >
            <div class="w-full">
              <input
                onChange={(event) => {
                  setSearchTerm(event.target.value)
                }}
                type="text"
                class="w-full rounded-full px-4 py-1 text-gray-800 focus:outline-none"
                placeholder="search"
                x-model="search"
                id="myInput"
              />
            </div>
            <button
              type="submit"
              class="flex h-12 w-12 items-center justify-center rounded-r-lg bg-blue-500 text-white"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <span className="mt-3 text-sm text-gray-500"></span>
        {updateProduct ? (
          <EditProduct product={productId} />
        ) : (
          <div className="mt-10">
            {newProduct ? (
              <NewProduct />
            ) : (
              <div className="grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden">
                {productsData
                  ?.filter((product) => {
                    if (searchTerm == '') {
                      return product
                    } else if (
                      product.nom
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return product
                    }
                  })
                  .map(function (product, i) {
                    console.log(productsData)
                    return (
                      <div className="mt-10 w-full" key={product._id}>
                        <div className=" mx-auto  w-full max-w-sm grid-cols-4 gap-10 ">
                          <div className="">
                            {isDeleting ? (
                              <Loader active />
                            ) : (
                              <>
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
                                  <button
                                    onClick={() =>
                                      !showPromo
                                        ? setShowPromo(true)
                                        : setShowPromo(false)
                                    }
                                    className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                                    type="button"
                                  >
                                    Promo
                                  </button>
                                  {showPromo ? (
                                    <div className="left-100  fixed top-40  z-50 mx-auto  max-h-full w-full rounded-md bg-gray-100 p-5 sm:max-w-md">
                                      <h6 className="mb-1 block font-extrabold"></h6>
                                      <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                          <input
                                            name="Product"
                                            type="text"
                                            key={product._id}
                                            data-val={product._id}
                                            value={product._id}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                                          />
                                          <label
                                            className="mb-1 block "
                                            htmlFor="date"
                                          >
                                            Date début
                                          </label>
                                          <input
                                            name="dateDebut"
                                            type="date"
                                            required=""
                                            placeholder=""
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                                          />
                                        </div>

                                        <div className="mb-4">
                                          <label
                                            className="mb-1 block"
                                            htmlFor="date"
                                          >
                                            Date fin
                                          </label>
                                          <input
                                            name="dateFin"
                                            type="date"
                                            required=""
                                            placeholder=""
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                                          />
                                        </div>
                                        <div className="mb-4">
                                          <label
                                            className="mb-1 block"
                                            htmlFor="remise"
                                          >
                                            Remise
                                          </label>
                                          <input
                                            name="remise"
                                            type="Number"
                                            required=""
                                            placeholder=""
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                                          />
                                        </div>
                                        <div className="mt-6">
                                          <button
                                            type="submit"
                                            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-semibold capitalize text-white transition hover:bg-blue-700 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-700 disabled:opacity-25"
                                          >
                                            Enregistrer
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  ) : null}
                                  <br></br>
                                  <span className="mt-2 text-gray-500">
                                    {product.prix} DT
                                  </span>
                                  <br></br>

                                  <button
                                    onClick={() =>
                                      !updateProduct
                                        ? setUpdateProduct(true) ||
                                          setProductId(product)
                                        : setUpdateProduct(false)
                                    }
                                    className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                                    type="button"
                                  >
                                    Edit
                                  </button>

                                  <button
                                    className="focus:shadow-outline ml-8 rounded bg-red-500 py-2 px-4 font-bold text-white shadow hover:bg-red-500 focus:outline-none"
                                    type="button"
                                    onClick={open}
                                  >
                                    Supprimer
                                  </button>
                                </div>
                              </>
                            )}
                            <Confirm
                              open={confirm}
                              onCancel={close}
                              onConfirm={handleDelete}
                            />
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
Produits.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`)
  const { data } = await res.json()

  return { products: data }
}

export default Produits
