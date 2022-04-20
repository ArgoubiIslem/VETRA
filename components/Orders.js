import React from 'react'

function Orders() {
  return (
    <div className="container mx-auto px-4 py-16 pt-4 ">
      <div className="container">
        <div className="min-w-screen flex  min-h-screen  justify-center overflow-hidden bg-gray-100 font-sans  ">
          <div className="w-full lg:w-5/6">
            <h3 className="mb-8 text-3xl font-medium text-gray-700">
              Les Commandes
            </h3>
            <div
              class="mx-auto flex max-w-md items-center rounded-lg bg-white "
              x-data="{ search: '' }"
            >
              <div class="w-full">
                <input
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
                      <th className="py-3 px-6 text-left">Nom</th>
                      <th className="py-3 px-6 text-center">Email</th>
                      <th className="py-3 px-6 text-center">Totale</th>
                      <th className="py-3 px-6 text-center">Status</th>
                      <th className="py-3 px-6 text-center">Date</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-light text-gray-600">
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="whitespace-nowrap py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-medium">1</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img
                              className="h-6 w-6 rounded-full"
                              src="https://randomuser.me/api/portraits/men/1.jpg"
                            />
                          </div>
                          <span>Argoubi Islem</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          argoubiislem5@gmail.com
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">12.0000</td>
                      <td className="py-3 px-6 text-center">
                        <div className="item-center flex justify-center">
                          <span className="rounded-full bg-green-200 py-1 px-3 text-xs text-green-600">
                            Completed
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="item-center flex justify-center">
                          12/05/2022
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="item-center flex justify-center">
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
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
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
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="whitespace-nowrap py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2"></div>
                          <span className="font-medium">2</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <img
                              className="h-6 w-6 rounded-full"
                              src="https://randomuser.me/api/portraits/men/1.jpg"
                            />
                          </div>
                          <span>Dkhili Amal</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          amldkh29@gmail.com
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">46.0000</td>
                      <td className="py-3 px-6 text-center">
                        <div className="item-center flex justify-center">
                          <span className="rounded-full bg-green-200 py-1 px-3 text-xs text-green-600">
                            Completed
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="item-center flex justify-center">
                          22/11/2022
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="item-center flex justify-center">
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
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
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
                        </div>
                      </td>
                    </tr>
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

export default Orders
