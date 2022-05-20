import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { Confirm, Button, Loader } from 'semantic-ui-react'
function Abonnees() {
  const [searchTerm, setSearchTerm] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const [abonneesData, setAbonneesData] = useState(null)
  const [abonneetId, setAbonneetId] = useState()
  useEffect(() => {
    if (isDeleting) {
      deleteContact()
    }
  }, [isDeleting])

  const open = () => setConfirm(true)

  const close = () => setConfirm(false)

  const deleteContact = async () => {
    const id = router.query.id
    try {
      const deleted = await fetch(`http://localhost:3000/api/abonnees/${id}`, {
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
        const response = await fetch('http://localhost:3000/api/abonnees')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setAbonneesData(result['data'])
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
    <div className="container mx-auto px-4 py-16 pt-4 ">
      <div className="container">
        <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
          <div className="w-full lg:w-5/6">
            <h3 className="mb-8 text-3xl font-medium text-gray-700">
              Les Abonnées
            </h3>
            <div
              class="mx-auto flex max-w-md items-center rounded-lg bg-white "
              x-data="{ search: '' }"
            >
              <div class="w-full">
                <input
                  onChange={(event) => {
                    setSearchTerm(event.target.value)
                  }}
                  type="search"
                  class="w-full rounded-full px-4 py-1 text-gray-800 focus:outline-none"
                  placeholder="search"
                  x-model="search"
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

            <div className="mt-10">
              <div className="my-6 rounded bg-white shadow-md">
                <table className="w-full rounded shadow-lg">
                  <thead>
                    <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                      <th className="py-3 px-6 text-left">ID</th>
                      <th className="py-3 px-6 text-center">Email</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="text-sm font-light text-gray-600">
                    {abonneesData
                      ?.filter((abonnee) => {
                        if (searchTerm == '') {
                          return abonnee
                        } else if (
                          abonnee.email
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                        ) {
                          return abonnee
                        }
                      })
                      .map(function (abonnee, i) {
                        console.log(abonneesData)
                        return (
                          <tr className="border-b border-gray-200 hover:bg-gray-100">
                            {isDeleting ? (
                              <Loader active />
                            ) : (
                              <>
                                <td className="whitespace-nowrap py-3 px-6 text-left">
                                  <div className="flex items-center">
                                    <div className="mr-2"></div>
                                    <span className="font-medium">#</span>
                                  </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                  <div className="flex items-center justify-center">
                                    {abonnee.email}
                                  </div>
                                </td>

                                <td className="py-3 px-6 text-center">
                                  <div className="item-center flex justify-center">
                                    <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500"></div>

                                    <button onClick={open}>
                                      <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          />
                                        </svg>
                                      </div>
                                    </button>
                                  </div>
                                </td>
                              </>
                            )}
                            <Confirm
                              open={confirm}
                              onCancel={close}
                              onConfirm={handleDelete}
                            />
                          </tr>
                        )
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Abonnees.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/abonnees/${id}`)
  const { data } = await res.json()

  return { Abonnees: data }
}

export default Abonnees
