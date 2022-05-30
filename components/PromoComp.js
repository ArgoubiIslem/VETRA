import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function PromoComp({ product, setShowPromo }) {
  const [form, setForm] = useState({
    Product: product._id,
    nom: product.nom,
    image: product.image,
    prix: product.prix,
    dateDebut: '',
    dateFin: '',
    remise: 0,
  })
  const [showConf, setShowConf] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()

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

  return (
    <div className="left-100  fixed top-40  z-50 mx-auto  max-h-full w-full rounded-md bg-gray-100 p-5 sm:max-w-md">
      <h6 className="mb-1 block font-extrabold"></h6>
      <div class="flex w-full items-center">
        <div></div>

        <svg
          class="ml-auto h-6 w-6 cursor-pointer fill-current text-gray-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
        </svg>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            name="Product"
            type="text"
            value={product._id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
          />
          <input
            name="nom"
            type="text"
            value={product.nom}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
          />
          <input
            name="image"
            type="text"
            value={product.image}
            onChange={handleChange}
            placeholder=""
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
          />
          <input
            name="prix"
            type="Number"
            value={product.prix}
            onChange={handleChange}
            placeholder=""
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
          />
          <label className="mb-1 block " htmlFor="date">
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
          <label className="mb-1 block" htmlFor="date">
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
          <label className="mb-1 block" htmlFor="remise">
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
  )
}

export default PromoComp
