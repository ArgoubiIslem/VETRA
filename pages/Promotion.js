import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Headers from '../components/Headers'
import Footer from '../components/Footer'
function Promotion() {
  let prix = 0
  const [promosData, setPromosData] = useState(null)
  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/Promos')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setPromosData(result['data'])
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
    <div>
      <Headers />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <main className="my-8">
        <div>
          <nav
            className="flex  justify-center rounded-lg border border-gray-200 bg-gray-50 py-3 px-5 text-gray-700 dark:border-gray-100 dark:bg-gray-100"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 "
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Accueil
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="/Promotion"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400  md:ml-2"
                  >
                    Promation
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex flex-col items-center justify-center "></div>
        <div className=" gap-70 grid  grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ">
          {promosData?.map(function (promo, i) {
            console.log(promosData)
            return (
              <div className="mt-10 flex w-full " key={promo._id}>
                <div className="mx-auto ml-10 h-full w-full overflow-x-hidden overflow-y-hidden">
                  <div
                    id="slider"
                    className="flex h-full items-center justify-start gap-10 transition duration-700 ease-out md:gap-6 lg:gap-8"
                  >
                    <div className="relative flex w-full flex-shrink-0 sm:w-auto ">
                      <img
                        src={promo.image}
                        className="h-96  w-full object-cover object-center"
                      />
                      <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                        <span class="inline-block rounded bg-[#E4187D] px-2 text-sm text-white">
                          -{promo.remise} %
                        </span>
                        <div className="flex h-full items-end pb-6">
                          <div class="h-23 w-96 bg-gray-800 bg-opacity-50 py-4 px-4">
                            <h3 class="text-md font-semibold text-gray-100">
                              {promo.nom}
                            </h3>
                            <p class="mt-4  text-gray-100">
                              <strike>{promo.prix} DT</strike>
                            </p>
                            <p class="mt-4  text-gray-100">
                              {(prix = (promo.remise * promo.prix) / 100)} DT
                            </p>
                            <span class="mt-4 flex w-full items-center justify-center rounded bg-yellow-400 py-1 hover:bg-yellow-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <button class="font-semibold text-gray-800">
                                Détail produit
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Promotion
