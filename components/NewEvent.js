import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Loader from './Loader'
const NewEvent = () => {
  const [form, setForm] = useState({
    description: '',
    date: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys')
      if (Object.keys(errors).length === 0) {
        createEvent()
      } else {
        alert('please fill the required fields !')
      }
    }
  }, [isSubmitting])
  const createEvent = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('http://localhost:3000/api/evenements', {
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
    <div className="container mx-auto px-4 py-16 pt-4">
      <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden  font-sans  ">
        <div className="w-full lg:w-5/6">
          <h3 className="mb-8 text-3xl font-medium text-gray-700">
            Créer evenement
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
                    Description
                  </label>
                  <input
                    className="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="description"
                    type="text"
                    required=""
                    placeholder=""
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="block text-sm text-gray-600"
                    for="cus_email"
                  >
                    Date
                  </label>
                  <input
                    className="w-full rounded  bg-gray-200 px-5 py-4 text-gray-700"
                    id="cus_email"
                    name="date"
                    type="Date"
                    required=""
                    aria-label="Email"
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-4">
                  <button
                    className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                    type="submit"
                  >
                    Ajouter un evenement
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

export default NewEvent
