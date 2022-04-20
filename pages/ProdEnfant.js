import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Media from '../components/Media'
import Headers from '../components/Headers'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Link from 'next/link'

function ProdEnfant() {
  const [productsData, setProductsData] = useState(null)
  const [newProduct, setNewProduct] = useState(false)

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch('http://localhost:3000/api/products')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setProductsData(result['data'])
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

      <div className="bg-white">
        <main className="my-8">
          <div className="container mx-auto px-6">
            <Filter />
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {productsData
                ?.filter((product) => {
                  return product.categorie === 'Enfant'
                })
                .map(function (product, i) {
                  console.log(productsData)
                  return (
                    <div
                      className="relative flex w-full flex-shrink-0 sm:w-auto "
                      key={product._id}
                    >
                      <img
                        src={product.image}
                        className="h-96  w-full object-cover object-center"
                      />
                      <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                        <div className="flex h-full items-end pb-6">
                          <div class="h-23 w-96 bg-gray-800 bg-opacity-50 py-4 px-4">
                            <h3 class="text-md font-semibold text-gray-100">
                              {product.nom}
                            </h3>
                            <p class="mt-4  text-gray-100">{product.prix} DT</p>
                            <Link href={`/${product._id}/DetailPage`}>
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
                                  Ajouter au panier
                                </button>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div className="flex justify-center">
              <div className="mt-8 flex rounded-md">
                <a
                  href="#"
                  className="ml-0 rounded-l border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
                >
                  <span>Previous</span>
                </a>
                <a
                  href="#"
                  className="border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
                >
                  <span>1</span>
                </a>
                <a
                  href="#"
                  className="border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
                >
                  <span>2</span>
                </a>
                <a
                  href="#"
                  className="border border-r-0 border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
                >
                  <span>3</span>
                </a>
                <a
                  href="#"
                  className="rounded-r border border-gray-200 bg-white py-2 px-4 leading-tight text-blue-700 hover:bg-blue-500 hover:text-white"
                >
                  <span>Next</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default ProdEnfant
