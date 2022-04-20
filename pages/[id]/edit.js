import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Loader from '../../components/Loader'
const EditProduct = ({ product }) => {
  const [form, setForm] = useState({
    nom: product.nom,
    image: product.image,
    prix: product.prix,
    description: product.description,
    countInStock: product.countInStock,
    categorie: product.categorie,
    statut: product.statut,
    marque: product.marque,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys')
      if (Object.keys(errors).length === 0) {
        updateProduct()
      } else {
        alert('please fill the required fields !')
      }
    }
  }, [isSubmitting])
  const updateProduct = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(
        `http://localhost:3000/api/products/${router.query.id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      )
      setTimeout(() => {
        setIsLoading(false)
        alert('Modification avec success')
      }, 500)
      console.log('Modifier !' + JSON.stringify(form))
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

  return (
    <div className="container mx-auto px-4 py-16 pt-4">
      <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
        <div className="w-full lg:w-5/6">
          <h3 className="mb-8 text-3xl font-medium text-gray-700">
            Modifier Produits
          </h3>
          <div class="leading-loose">
            {isLoading ? (
              <Loader />
            ) : (
              <form
                class="m-4  rounded bg-white p-20 shadow-xl"
                onSubmit={handleSubmit}
              >
                <div class="">
                  <label class="text-gray-00 block text-sm" for="cus_name">
                    Titre de produit
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="nom"
                    value={form.nom}
                    type="text"
                    required=""
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>
                <div class="mt-2">
                  <label class="block text-sm text-gray-600" for="cus_email">
                    Image de produit
                  </label>
                  <input
                    class="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="image"
                    type="file"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600" for="cus_email">
                    Description
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="description"
                    type="text"
                    value={form.description}
                    aria-label="Email"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div class="mt-2 inline-block w-1/2 pr-1">
                  <label class=" text-sm text-gray-600" for="cus_email">
                    Prix
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="prix"
                    type="number"
                    value={form.prix}
                    required
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>
                <div class="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label class=" text-sm text-gray-600" for="cus_email">
                    Compter en stock
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="countInStock"
                    type="number"
                    aria-label="Email"
                    value={form.countInStock}
                    required
                    onChange={handleChange}
                  />
                </div>
                <div class="-mx-1 mt-2 inline-block w-1/2 pl-1">
                  <label class=" text-sm text-gray-600" for="cus_email">
                    catégorie
                  </label>
                  <select
                    id="vehicle_id"
                    name="categorie"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-200  py-2 px-3 text-gray-600 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    required
                    onChange={handleChange}
                  >
                    <option value="Homme" data-val="Homme">
                      Homme
                    </option>
                    <option value="Femme" data-val="Femme">
                      Femme
                    </option>
                    <option value="Enfant" data-val="Enfant">
                      Enfant
                    </option>
                  </select>
                </div>

                <div class="">
                  <label class="block text-sm text-gray-600" for="cus_name">
                    Statut
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_name"
                    name="statut"
                    type="text"
                    value={form.statut}
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
                    id="cus_name"
                    name="marque"
                    type="text"
                    value={form.marque}
                    aria-label="Name"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div class="mt-4">
                  <button
                    className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                    type="submit"
                  >
                    Modifier
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
EditProduct.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`)
  const { data } = await res.json()

  return { product: data }
}
export default EditProduct
