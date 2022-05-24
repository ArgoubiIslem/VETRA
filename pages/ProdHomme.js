import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Media from '../components/Media'
import Headers from '../components/Headers'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Marque from '../components/Marque'
import Filter from '../components/Filter'
import Breadcrumb from '../components/BreadCrumb'
import filterSearch from '../utils/filterSearch'

function ProdHomme() {
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
  const filterResult = (catItem) => {
    const result = productsData?.filter((curData) => {
      return curData.sousCategorie === catItem
    })
    setProductsData(result)
  }
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
          <Breadcrumb />
          <div className="container mx-auto px-6">
            <div className=" flex justify-end">
              <div class="flex-inline w-1/2 space-y-0.5">
                <div className="item order-first  h-60 ">
                  <div class=" absolute mb-6 flex h-64  max-w-xs flex-col justify-between   bg-white py-5 px-4 ">
                    {' '}
                    <fieldset>
                      <span class="mb-1 p-2 font-semibold text-gray-800">
                        CATÉGORIES
                      </span>
                      <br></br>
                      <br></br>

                      <div class="mb-4 flex items-center">
                        {productsData?.map(function (product, i) {
                          console.log(productsData)
                          return (
                            <div class="mb-4 flex items-center">
                              <input
                                id="checkbox-1"
                                aria-describedby="checkbox-1"
                                type="checkbox"
                                class="h-4 w-4 rounded border-yellow-500 bg-yellow-500 text-yellow-500 focus:ring-2 focus:ring-yellow-500 dark:border-gray-600 dark:bg-yellow-500 dark:ring-offset-yellow-500 dark:focus:ring-yellow-500"
                              />
                              <button
                                onClick={() =>
                                  filterResult(product.sousCategorie)
                                }
                              >
                                {product.sousCategorie}
                              </button>
                            </div>
                          )
                        })}
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div className="mt-6  grid grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {productsData
                  ?.filter((product) => {
                    return product.categorie === 'Homme'
                  })
                  .map(function (product, i) {
                    console.log(productsData)
                    return (
                      <div className="mt-10 w-full" key={product._id}>
                        <div className=" mx-auto  w-full max-w-sm grid-cols-4 gap-10 bg-gray-200">
                          <div className="">
                            <div className="min-h-80  aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                              <img
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                                src={product.image}
                                alt=""
                              />
                            </div>
                            <div className="px-5 py-3">
                              <span className="mt-2 text-gray-500">
                                {product.nom}
                              </span>
                              <br></br>
                              <span className="mt-2 text-gray-500">
                                {product.prix} DT
                              </span>
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
                              <br></br>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
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

export default ProdHomme
