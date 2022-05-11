import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Loader from './Loader'
import ListFemme from './ListFemme'
import ListHomme from './ListHomme'
import ListEnfant from './ListEnfant'
const NewProduct = () => {
  const [productsData, setProductsData] = useState(null)
  const [showListFemme, setShowListFemme] = useState(false)
  const [showListHomme, setShowListHomme] = useState(false)
  const [showListEnfant, setShowListEnfant] = useState(false)
  const [form, setForm] = useState({
    nom: '',
    image: '',
    prix: 0,
    description: '',
    countInStock: 0,
    categorie: '',
    statut: '',
    marque: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys')
      if (Object.keys(errors).length === 0) {
        createProduct()
      } else {
        alert('please fill the required fields !')
      }
    }
  }, [isSubmitting])
  const createProduct = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('http://localhost:3000/api/products', {
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

  return (
    <div className="container mx-auto px-4 py-16 pt-4">
      <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden  font-sans  ">
        <div className="w-full lg:w-5/6">
          <h3 className="mb-8 text-3xl font-medium text-gray-700">
            Créer Produits
          </h3>
          <div class="leading-loose">
            {isLoading ? (
              <Loader />
            ) : (
              <form
                className="m-4  rounded bg-white p-20 shadow-xl"
                onSubmit={handleSubmit}
              >
                <div className="">
                  <label className="text-gray-00 block text-sm" for="cus_name">
                    Titre de produit
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="nom"
                    type="text"
                    required=""
                    placeholder="titre de produit"
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    Image de produit
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="image"
                    type="file"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label class=" block text-sm text-gray-600" for="cus_email">
                    Description
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="description"
                    type="text"
                    placeholder="description"
                    aria-label="Email"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-2 inline-block w-1/2 pr-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    Prix
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="prix"
                    type="number"
                    required
                    placeholder="20 DT"
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    Compter en stock
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="countInStock"
                    type="number"
                    placeholder="compter en stock"
                    aria-label="Email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    Categorie
                  </label>

                  <select
                    onChange={handleChange}
                    name="categorie"
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                  >
                    <option placeholder="select"></option>
                    {productsData?.map(function (product, i) {
                      console.log(productsData)
                      return (
                        <option
                          key={product._id}
                          value={product.categorie}
                          data-val={product.categorie}
                        >
                          {product.categorie}
                        </option>
                      )
                    })}
                  </select>

                  <input
                    list="browsers"
                    name="categorie"
                    onChange={handleChange}
                    placeholder="Autre catégorie"
                    class="w-full appearance-none bg-gray-200 px-4 text-gray-800 outline-none"
                  />
                </div>
                {/* <div className="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    catégorie
                  </label> */}
                {/* <select
                    name="categorie"
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    required
                    onChange={handleChange}
                  >
                    <option value="Homme" data-val="Homme">
                      Homme
                    </option>

                    <option
                      value="Femme"
                      data-val="Femme"
                      onClick={() => setShowList(true)}
                    >
                      Femme
                    </option>

                    <option value="Enfant" data-val="Enfant">
                      Enfant
                    </option>
                  </select> */}
                <div class="group -mt-9 ml-2 inline-block h-9">
                  <div class="mx-auto max-w-md">
                    <div class="relative">
                      <div class="flex h-10 items-center rounded border border-gray-200 bg-gray-200">
                        {/* <input
                          class="w-full appearance-none bg-gray-200 px-4 text-gray-800 outline-none"
                          name="categorie"
                          type="text"
                          placeholder="categorie"
                          required
                          onChange={handleChange}
                        /> */}

                        {/* <button class="cursor-pointer text-gray-300 outline-none transition-all hover:text-gray-600 focus:outline-none">
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
                        </button> */}
                        {/* <label
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
                        </label> */}
                      </div>

                      {/* <input
                        type="checkbox"
                        name="show_more"
                        id="show_more"
                        class="peer hidden"
                        checked
                        
                      />
                      <div class="duration-250 absolute  mt-1 hidden w-full scale-0 transform flex-col overflow-hidden rounded border border-gray-200 bg-white shadow transition ease-in-out group-hover:scale-100 peer-checked:flex">
                        <div class="block border-l-4 border-transparent p-2 hover:bg-gray-200 group-hover:border-blue-600">
                          <button
                            onClick={() =>
                              setShowListFemme(true) ||
                              setShowListHomme(false) ||
                              setShowListEnfant(false)
                            }
                          >
                            Femme
                          </button>
                        </div>
                        <div class="block border-l-4 border-transparent p-2 hover:bg-gray-200 group-hover:border-blue-600">
                          <button
                            onClick={() =>
                              setShowListHomme(true) ||
                              setShowListFemme(false) ||
                              setShowListEnfant(false)
                            }
                          >
                            Homme
                          </button>
                        </div>
                        <div class="block border-l-4 border-transparent p-2 hover:bg-gray-200 group-hover:border-blue-600">
                          <button
                            onClick={() =>
                              setShowListEnfant(true) ||
                              setShowListHomme(false) ||
                              setShowListFemme(false)
                            }
                          >
                            Enfant
                          </button> */}
                      {/* </div>
                      </div> */}

                      {/* <div>
                      <label
                        className="block text-sm text-gray-600"
                        for="cus_name"
                      >
                        catégorie
                      </label>

                      <div>
                        <input
                          class="w-full appearance-none bg-gray-200 px-4 text-gray-800 outline-none"
                          name="categorie"
                          onChange={handleChange}
                        />

                        <datalist id="browsers">
                          {productsData?.map(function (product, i) {
                            console.log(productsData)
                            return <input value={product.categorie} />
                          })}
                        </datalist>
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>

                {/* <div className="-mx-1 mt-2 inline-block w-1/2 pl-3">
                  {showListFemme ? <ListFemme /> : null}
                  {showListHomme ? <ListHomme /> : null}
                  {showListEnfant ? <ListEnfant /> : null}
                </div> */}

                <div className="">
                  <label className="block text-sm text-gray-600" for="cus_name">
                    Statut
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_name"
                    name="statut"
                    type="text"
                    placeholder="statut"
                    aria-label="Name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div class="">
                  <label class="block text-sm text-gray-600" for="cus_name">
                    Marque
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    name="marque"
                    type="text"
                    placeholder="marque"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <button
                    className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                    type="submit"
                  >
                    Ajouter un produit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct
