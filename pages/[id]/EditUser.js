import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import Loader from '../../components/Loader'

const EditUser = ({ user, setUpdateUser }) => {
  console.log(user)
  const [form, setForm] = useState({
    nomP: user?.nomP,

    email: user?.email,
    isAdmin: user?.isAdmin,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()
  useEffect(() => {
    if (isSubmitting) {
      console.log(Object.keys(errors).length + 'keys')
      if (Object.keys(errors).length === 0) {
        updateUser()
      } else {
        alert('please fill the required fields !')
      }
    }
  }, [isSubmitting])
  const updateUser = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(`http://localhost:3000/api/users/${user?._id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
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
    <>
      <div
        onClick={() => setUpdateUser(false)}
        className="fixed bottom-0 left-0 right-0 top-0 bg-gray-500 bg-opacity-40 "
      ></div>
      <div className="fixed top-8 z-50 mx-auto -my-32 flex w-full max-w-4xl items-center justify-center overflow-hidden font-sans   ">
        <div className="w-full max-w-4xl lg:w-5/6">
          <div className="leading-loose">
            {isLoading ? (
              <Loader />
            ) : (
              <form
                class="m-4  rounded bg-white p-20 shadow-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="mb-8 text-3xl font-medium text-gray-700">
                  Modifier utilisateur
                </h3>
                <div class="">
                  <label class="text-gray-00 block text-sm" for="cus_name">
                    Utilisateur
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-5 py-1 text-gray-700"
                    id="cus_name"
                    name="nomP"
                    value={form.nomP}
                    type="text"
                    required=""
                    aria-label="Name"
                    onChange={handleChange}
                  />
                </div>

                <div class="mt-2">
                  <label class=" block text-sm text-gray-600" for="cus_email">
                    email
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="email"
                    type="text"
                    value={form.email}
                    aria-label="Email"
                    required
                    onChange={handleChange}
                  />
                </div>
                <div class="mt-2">
                  <label class=" block text-sm text-gray-600" for="cus_email">
                    Rôle
                  </label>
                  <input
                    class="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
                    id="cus_email"
                    name="isAdmin"
                    type="text"
                    value={form.isAdmin}
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
    </>
  )
}
EditUser.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`)
  const { data } = await res.json()

  return { user: data }
}
export default EditUser
