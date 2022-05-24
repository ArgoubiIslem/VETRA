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
  const [fournisseursData, setFournisseursData] = useState(null)
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
    sousCategorie: '',
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

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/fournisseurs')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setFournisseursData(result['data'])
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
                          key={i}
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
                <div className="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    Sous Categorie
                  </label>

                  <select
                    onChange={handleChange}
                    name="sousCategorie"
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                  >
                    <option placeholder="select"></option>
                    {productsData?.map(function (product, i) {
                      console.log(productsData)
                      return (
                        <option
                          key={product._id}
                          value={product.sousCategorie}
                          data-val={product.sousCategorie}
                        >
                          {product.sousCategorie}
                        </option>
                      )
                    })}
                  </select>

                  <input
                    list="browsers"
                    name="sousCategorie"
                    onChange={handleChange}
                    placeholder="Autre catégorie"
                    class="w-full appearance-none bg-gray-200 px-4 text-gray-800 outline-none"
                  />
                </div>

                {/* <div className="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    Fournisseur
                  </label>

                  <select
                    onChange={handleChange}
                    name="categorie"
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                  >
                    <option placeholder="select"></option>
                    {fournisseursData?.map(function (fournisseur, i) {
                      console.log(fournisseursData)
                      return (
                        <option
                          key={fournisseur._id}
                          value={fournisseur.nom}
                          data-val={fournisseur.nom}
                        >
                          {fournisseur.nom}
                        </option>
                      )
                    })}
                  </select>
                </div> */}

                <div class="group -mt-9 ml-2 inline-block h-9">
                  <div class="mx-auto max-w-md">
                    <div class="relative">
                      <div class="flex h-10 items-center rounded border border-gray-200 bg-gray-200"></div>
                    </div>
                  </div>
                </div>

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

                <div className="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    Marque
                  </label>

                  <select
                    onChange={handleChange}
                    name="marque"
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                  >
                    <option placeholder="select"></option>
                    {productsData?.map(function (product, i) {
                      console.log(productsData)
                      return (
                        <option
                          key={product._id}
                          value={product.marque}
                          data-val={product.marque}
                        >
                          {product.marque}
                        </option>
                      )
                    })}
                  </select>

                  <input
                    list="browsers"
                    name="marque"
                    onChange={handleChange}
                    placeholder="Autre catégorie"
                    class="w-full appearance-none bg-gray-200 px-4 text-gray-800 outline-none"
                  />
                </div>

                <div className="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label className=" text-sm text-gray-600" for="cus_email">
                    Fournisseur
                  </label>

                  <select
                    onChange={handleChange}
                    name="fournisseur"
                    className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                  >
                    <option placeholder="select"></option>
                    {fournisseursData?.map(function (fournisseur, i) {
                      console.log(fournisseursData)
                      return (
                        <option
                          key={fournisseur._id}
                          value={fournisseur.nom}
                          data-val={fournisseur.nom}
                        >
                          {fournisseur.nom}
                        </option>
                      )
                    })}
                  </select>

                  <input
                    list="browsers"
                    name="fournisseur"
                    onChange={handleChange}
                    placeholder="Autre catégorie"
                    class="w-full appearance-none bg-gray-200 px-4 text-gray-800 outline-none"
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
