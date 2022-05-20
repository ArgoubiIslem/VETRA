import React from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Media from '../components/Media'
import Headers from '../components/Headers'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Loader from '../components/Loader'
const Contacte = () => {
  const [form, setForm] = useState({
    nomP: '',
    email: '',
    tel: 0,
    msg: '',
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
      const res = await fetch('http://localhost:3000/api/contacts', {
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
    <div>
      <Headers />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="flex min-h-screen w-full flex-col items-center bg-gray-50 pt-6 sm:justify-center sm:pt-0">
        <div className="mx-auto w-full p-5 sm:max-w-md">
          <h6 className="mb-1 block font-extrabold">CONTACTEZ-NOUS</h6>
          {isLoading ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-1 block" for="nom">
                  Nom et Prénom
                </label>
                <input
                  id="nomP"
                  type="text"
                  name="nomP"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block" for="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block" for="tel">
                  Num tél
                </label>
                <input
                  id="tel"
                  type="tel"
                  name="tel"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
              <div className="mb-4">
                <label className="mb-1 block" for="message">
                  Votre message
                </label>
                <input
                  id="msg"
                  type="text"
                  name="msg"
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-semibold capitalize text-white transition hover:bg-blue-700 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-700 disabled:opacity-25"
                >
                  Envoyer
                </button>
              </div>
            </form>
          )}
        </div>
        <Media />

        <Footer />
      </div>
    </div>
  )
}

export default Contacte
