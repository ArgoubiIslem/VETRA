import React from 'react'

import Headers from '../../components/Headers'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { useState, useEffect } from 'react'

const DetailPage = ({ product }) => {
  const [form, setForm] = useState({
    nom: product.nom,
    categorie: product.categorie,
    image: product.image,
    prix: product.prix,
    description: product.description,
    countInStock: product.countInStock,
    statut: product.statut,
    marque: product.marque,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()

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
    validate()
    setIsSubmitting(true)
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <Headers />
      {/* <!-- component -->
<!DOCTYPE html> */}
      <br></br>
      <br></br>
      <br></br>
      <html lang="en">
        <body>
          <section className="body-font overflow-hidden  text-gray-400">
            <div className="container mx-auto px-5 py-24">
              <div className="mx-auto flex flex-wrap lg:w-4/5">
                <img
                  alt="ecommerce"
                  className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
                  src={form.image}
                />
                <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
                  <h2 className="title-font text-sm tracking-widest text-gray-900">
                    {form.marque}
                  </h2>
                  <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
                    {form.nom}
                  </h1>
                  <div className="mb-4 flex">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        className="h-4 w-4 text-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="ml-3">4 Reviews</span>
                    </span>
                    <span className="ml-3 flex space-x-2 border-l-2 border-gray-800 py-2 pl-3 text-gray-500">
                      <a>
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="2"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a>
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="2"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a>
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="2"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed">{product.description}</p>
                  <div className="mt-6 mb-5 flex items-center border-b-2 border-gray-800 pb-5">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="h-6 w-6 rounded-full border-2 border-gray-800 focus:outline-none"></button>
                      <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-800 bg-gray-700 focus:outline-none"></button>
                      <button className="ml-1 h-6 w-6 rounded-full border-2 border-gray-800 bg-red-900 focus:outline-none"></button>
                    </div>
                    <div className="ml-6 flex items-center">
                      <span className="mr-3">Size</span>
                      <div className="relative">
                        <select className="appearance-none rounded border  bg-transparent py-2 pl-3 pr-10 text-black focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                          <option>SM</option>
                          <option>M</option>
                          <option>L</option>
                          <option>XL</option>
                        </select>
                        <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            stroke-width="2"
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="ml-6 flex items-center">
                      <span className="mr-3">Qte</span>
                      <div className="relative">
                        <input
                          type="number"
                          className="appearance-none rounded border  bg-transparent py-2 pl-3 pr-10 text-black focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          // value={form.countInStock}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="title-font text-2xl font-medium text-white">
                      {form.prix} DT
                    </span>

                    <button className="ml-auto flex rounded border-0 bg-yellow-400 py-2 px-6 font-semibold  text-gray-800 hover:bg-yellow-400 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
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
                      Ajouter au panier
                    </button>
                    <button className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-800 p-0 text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke-width="2"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </body>
      </html>
      <Footer />
    </div>
  )
}

DetailPage.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`)
  const { data } = await res.json()

  return { product: data }
}
export default DetailPage
