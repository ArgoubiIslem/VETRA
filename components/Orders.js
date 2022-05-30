import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import { Confirm, Button, Loader } from 'semantic-ui-react'

import EditOrder from '/pages/[id]/EditOrder'
function Orders({ order }) {
  const [showConf, setShowConf] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()
  const [ordersData, setOrdersData] = useState(null)

  const [updateOrder, setUpdateOrder] = useState(false)

  const [orderId, setOrderId] = useState()

  const open = () => setConfirm(true)

  const close = () => setConfirm(false)

  const deleteOrder = async () => {
    // const id = router.query.id
    try {
      await fetch(`http://localhost:3000/api/orders/${order?._id}`, {
        method: 'Delete',
      })
      window.location.reload(true)
      // router.push("/");
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/orders/get')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setOrdersData(result['data'])
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
              Les commandes
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
              {updateOrder ? (
                <EditOrder order={orderId} />
              ) : (
                <div className="my-6 rounded bg-white shadow-md">
                  <table className="w-full rounded shadow-lg">
                    <thead>
                      <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                        <th className="py-3 px-6 text-left">Id</th>
                        <th className="py-3 px-6 text-left">Client</th>
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-center">Totale</th>
                        <th className="py-3 px-6 text-center">Payé</th>
                        <th className="py-3 px-6 text-center">Livré</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="text-sm font-light text-gray-600">
                      {ordersData
                        ?.filter((order) => {
                          if (searchTerm == '') {
                            return order
                          } else if (
                            order.nom
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase())
                          ) {
                            return order
                          }
                        })
                        .map(function (order, i) {
                          console.log(ordersData)
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
                                  <td className="py-3 px-6 text-left">
                                    <div className="flex items-center justify-center">
                                      <span>
                                        {order.shippingAddress.fullName}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-3 px-6 text-left">
                                    <div className="flex items-center justify-center">
                                      <span>{order.createdAt}</span>
                                    </div>
                                  </td>
                                  <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                      {order.totalPrice}
                                    </div>
                                  </td>
                                  <td className="py-3 px-6 text-center">
                                    <div className="item-center flex justify-center">
                                      <span className="rounded-full bg-green-200 py-1 px-3 text-xs text-green-600">
                                        {order.isPaid
                                          ? `payé ${order.paidAt}`
                                          : 'non payé'}
                                      </span>
                                    </div>
                                  </td>
                                  <td className="py-3 px-6 text-center">
                                    <div className="item-center flex justify-center">
                                      {order.isDelivered
                                        ? `livré ${order.deliveredAt}`
                                        : 'non livré'}
                                    </div>
                                  </td>
                                  <td className="py-3 px-6 text-center">
                                    <div className="item-center flex justify-center">
                                      <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500"></div>

                                      <button
                                        onClick={() =>
                                          !updateOrder
                                            ? setUpdateOrder(true) ||
                                              setOrderId(order)
                                            : setUpdateOrder(false)
                                        }
                                      >
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
                                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                            />
                                          </svg>
                                        </div>
                                      </button>

                                      <button>
                                        <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500">
                                          <svg
                                            onClick={() => setShowConf(true)}
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
                            </tr>
                          )
                        })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {showConf ? (
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
                  onClick={deleteOrder}
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
      ) : null}
    </div>
  )
}
Orders.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/orders/${id}`)
  const { data } = await res.json()

  return { fournisseurs: data }
}

export default Orders
