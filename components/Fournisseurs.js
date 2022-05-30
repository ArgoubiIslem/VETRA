import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { Confirm, Button, Loader } from 'semantic-ui-react'
import NewFournisseur from './NewFournisseur'
import EditFournisseur from '/pages/[id]/EditFournisseur'
import FournisseurCard from './FournisseurCard'
function Fournisseurs() {
  const [searchTerm, setSearchTerm] = useState('')
  // const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const [fournisseursData, setFournisseursData] = useState(null)
  const [newFournisseur, setNewFournisseur] = useState(false)
  const [updateFournisseur, setUpdateFournisseur] = useState(false)
  const [fournisseurId, setFournisseurId] = useState()
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
    <div className="container mx-auto px-4 py-16 pt-4 ">
      <div className="container">
        <div className="absolute top-40 right-4 ">
          {/* <Link
          href="/NewProduct"
          className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
        > */}
          <button
            onClick={() =>
              !newFournisseur
                ? setNewFournisseur(true)
                : setNewFournisseur(false)
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
            <span>Ajouter fournisseur</span>
          </button>
          {/* </Link> */}

          {/* <button
            className="focus:shadow-outline ml-8 rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none  "
            type="button"
          >
            Export
          </button> */}
        </div>
        <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
          <div className="w-full lg:w-5/6">
            <h3 className="mb-8 text-3xl font-medium text-gray-700">
              Les Fournisseurs
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
            {updateFournisseur ? (
              <EditFournisseur fournisseur={fournisseurId} />
            ) : (
              <div className="mt-10">
                {newFournisseur ? (
                  <NewFournisseur />
                ) : (
                  <div className="my-6 rounded bg-white shadow-md">
                    <table className="w-full rounded shadow-lg">
                      <thead>
                        <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                          <th className="py-3 px-6 text-left">ID</th>
                          <th className="py-3 px-6 text-left">Nom</th>
                          <th className="py-3 px-6 text-center">Email</th>
                          <th className="py-3 px-6 text-center">Tel</th>
                          <th className="py-3 px-6 text-center">Adresse</th>
                          <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                      </thead>

                      <tbody className="text-sm font-light text-gray-600">
                        {fournisseursData
                          ? fournisseursData?.map(function (fournisseur, i) {
                              return (
                                <FournisseurCard
                                  key={i}
                                  setUpdateFournisseur={setUpdateFournisseur}
                                  fournisseur={fournisseur}
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
Fournisseurs.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/fournisseurs/${id}`)
  const { data } = await res.json()

  return { fournisseurs: data }
}

export default Fournisseurs
