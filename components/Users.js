import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { Confirm, Button, Loader } from 'semantic-ui-react'
import NewUser from './NewUser'
import EditUser from '/pages/[id]/EditUser'
import UserCard from './UserCard'
function Users() {
  const [confirm, setConfirm] = useState(false)
  const [showConf, setShowConf] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const [usersData, setUsersData] = useState(null)
  const [newUser, setNewUser] = useState(false)
  const [updateUser, setUpdateUser] = useState(false)
  const [userId, setUserId] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const deleteUser = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(
        `http://localhost:3000/api/users/${router.query._id}`,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      setTimeout(() => {
        setIsLoading(false)
        alert('Supprition avec success')
      }, 500)

      // router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (isDeleting) {
      deleteUser()
    }
  }, [isDeleting])

  const handleDelete = async () => {
    setIsDeleting(true)
    close()
  }

  useEffect(() => {
    if (isDeleting) {
      deleteUser()
    }
  }, [isDeleting])
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/users')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setUsersData(result['data'])
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
            onClick={() => (!newUser ? setNewUser(true) : setNewUser(false))}
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
            <span>Ajouter Utilisateur</span>
          </button>
          {/* </Link> */}
        </div>
        <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
          <div className="w-full lg:w-5/6">
            <h3 className="mb-8 text-3xl font-medium text-gray-700">
              Les Utilisateurs
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
            {updateUser ? (
              <EditUser user={userId} />
            ) : (
              <div className="mt-10">
                {newUser ? (
                  <NewUser />
                ) : (
                  <div className="my-6 rounded bg-white shadow-md">
                    <table className="w-full rounded shadow-lg">
                      <thead>
                        <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                          <th className="py-3 px-6 text-left">Nom</th>
                          <th className="py-3 px-6 text-center">Email</th>
                          <th className="py-3 px-6 text-center">Rôle</th>

                          <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                      </thead>

                      <tbody className="text-sm font-light text-gray-600">
                        {usersData
                          ?.filter((user) => {
                            if (searchTerm == '') {
                              return user
                            } else if (
                              user.nomP
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                            ) {
                              return user
                            }
                          })
                          .map(function (user, i) {
                            console.log(usersData)
                            return (
                              <UserCard
                                key={i}
                                setUpdateUser={setUpdateUser}
                                user={user}
                              />
                            )
                          })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* {showConf ? (
        // <div className="fixed top-0 bottom-0 left-0 right-0 mx-auto h-full w-full items-center justify-center bg-gray-600 bg-opacity-70 ">
        //   <div className="mx-auto grid max-w-4xl items-center gap-10 bg-white py-16 px-8">
        //     <p>Do you want to delete ?</p>
        //     <div className="flex justify-between">
        //       <button
        //         onClick={deleteFournisseur}
        //         className="bg-blue-600 bg-opacity-70 px-6 py-2 text-white "
        //       >
        //         Confirm
        //       </button>
        //       <button
        //         onClick={() => setShowConf(false)}
        //         className="bg-blue-600 bg-opacity-70 px-6 py-2 text-white "
        //       >
        //         Cancel
        //       </button>
        //     </div>
        //   </div>
        // </div>
        <div class="fixed left-0 bottom-0 flex h-full w-full items-center justify-center bg-gray-100">
          <div class="w-1/2 rounded-lg bg-white">
            <div class="flex flex-col items-start p-4">
              <div class="flex w-full items-center">
                <div></div>

                <svg
                  onClick={() => setShowConf(false)}
                  class="ml-auto h-6 w-6 cursor-pointer fill-current text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                </svg>
              </div>
              <hr />
              <div class="">Voulez vous supprimer ?</div>
              <hr />
              <div class="ml-auto">
                <button
                  onClick={deleteUser}
                  class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                >
                  Confirmer
                </button>
                <button
                  onClick={() => setShowConf(false)}
                  class="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-gray-500 hover:text-white"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null} */}
    </div>
  )
}
Users.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`)
  const { data } = await res.json()

  return { users: data }
}

export default Users
