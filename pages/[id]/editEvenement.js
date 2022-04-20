import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Loader from '../../components/Loader'
const editEvenement = ({ evenement }) => {
  const [form, setForm] = useState({
    description: evenement.description,
    date: evenement.date,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys')
      if (Object.keys(errors).length === 0) {
        updateCategorie()
      } else {
        alert('please fill the required fields !')
      }
    }
  }, [isSubmitting])
  const updateCategorie = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(
        `http://localhost:3000/api/evenements/${router.query.id}`,
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
    <div className="container mx-auto px-4 py-16 pt-4">
      <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
        <div className="w-full lg:w-5/6">
          <h3 className="mb-8 text-3xl font-medium text-gray-700">
            Modifier Evenement
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
                    Description
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="description"
                    value={form.description}
                    type="text"
                    required=""
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600" for="cus_email">
                    Date
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="date"
                    type="date"
                    value={form.date}
                    aria-label="Email"
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
editEvenement.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/evenements/${id}`)
  const { data } = await res.json()

  return { evenement: data }
}
export default editEvenement
