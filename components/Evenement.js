import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { Confirm, Button, Loader } from 'semantic-ui-react'
import NewEvent from './NewEvent'
import EditEvenement from '/pages/[id]/EditEvenement'
import EvenementCard from './EvenementCard'
function Evenements() {
  const [searchTerm, setSearchTerm] = useState('')
  // const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const [evenementsData, setEvenementsData] = useState(null)
  const [newEvenement, setNewEvenement] = useState(false)
  const [updateEvenement, setUpdateEvenement] = useState(false)
  const [evenementId, setEvenementId] = useState()
  const [frid, setFrid] = useState()

  // useEffect(() => {
  //   if (isDeleting) {
  //     deleteFournisseur()
  //   }
  // }, [isDeleting])

  // const open = () => setConfirm(true)

  // const close = () => setConfirm(false)

  // const deleteFournisseur = async () => {
  //   // const id = router.query.id
  //   try {
  //     await fetch(`http://localhost:3000/api/fournisseurs/${frid}`, {
  //       method: 'Delete',
  //     })

  //     // router.push("/");
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleDelete = async () => {
  //   setIsDeleting(true)
  //   close()
  // }

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/evenements')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setEvenementsData(result['data'])
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
        <div className="absolute top-40 right-4 ">
          {/* <Link
          href="/NewProduct"
          className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
        > */}
          <button
            onClick={() =>
              !newEvenement ? setNewEvenement(true) : setNewEvenement(false)
            }
            className="bg-grey-light hover:bg-grey text-grey-darkest inline-flex items-center rounded bg-blue-600 py-2 px-4 font-bold text-white"
          >
            <svg
              className="h-3 w-3 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />{' '}
              <line x1="12" y1="5" x2="12" y2="19" />{' '}
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Ajouter evenement</span>
          </button>
          {/* </Link> */}
        </div>
        <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
          <div className="w-full lg:w-5/6">
            <h3 className="mb-8 text-3xl font-medium text-gray-700">
              Les Evenements
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
            {updateEvenement ? (
              <EditEvenement evenement={evenementId} />
            ) : (
              <div className="mt-10">
                {newEvenement ? (
                  <NewEvent />
                ) : (
                  <div className="my-6 rounded bg-white shadow-md">
                    <table className="w-full rounded shadow-lg">
                      <thead>
                        <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                          <th className="py-3 px-6 text-left">ID</th>

                          <th className="py-3 px-6 text-center">Description</th>
                          <th className="py-3 px-6 text-center">
                            Localisation
                          </th>
                          <th className="py-3 px-6 text-center">Date</th>
                          <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                      </thead>

                      <tbody className="text-sm font-light text-gray-600">
                        {evenementsData
                          ? evenementsData?.map(function (evenement, i) {
                              return (
                                <EvenementCard
                                  key={i}
                                  setUpdateEvenement={setUpdateEvenement}
                                  evenement={evenement}
                                />
                              )
                            })
                          : null}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
Evenements.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/evenements/${id}`)
  const { data } = await res.json()

  return { evenements: data }
}

export default Evenements
