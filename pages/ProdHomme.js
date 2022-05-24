import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Media from '../components/Media'
import Headers from '../components/Headers'
import filterSearch from '../utils/filterSearch'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import Link from 'next/link'
import RangeSlider from '../components/RangeSlider'
import Marque from '../components/Marque'
import Breadcrumb from '../components/BreadCrumb'

import { useRouter } from 'next/router'

function ProdHomme() {
  const [productsData, setProductsData] = useState(null)
  const [newProduct, setNewProduct] = useState(false)
  const [category, setCategory] = useState('')
  const router = useRouter()
  const handleCategory = (e) => {
    setCategory(e.target.value)
    filterSearch({ router, category: e.target.value })
  }
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
                      href="/ProdFemme"
                      className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400  md:ml-2"
                    >
                      Produits femme
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
          <div className="container mx-auto px-6">
            <div className=" flex justify-end space-x-0.5">
              <div class="flex-inline w-1/2 space-y-0.5">
                <div className="item order-first  h-60 ">
                  <div className="item h-28">
                    <div className="container mx-auto flex px-6 ">
                      <div className="bg-white-100 fixed inset-y-0 left-0 z-30 w-64  transform transition duration-300 lg:static lg:translate-x-0">
                        <nav className="mt-5">
                          <ul>
                            <li>
                              <div class=" absolute mb-6 flex h-64  max-w-xs flex-col justify-between   bg-white py-5 px-4 ">
                                {' '}
                                <fieldset>
                                  <span class="mb-1 p-2 font-semibold text-gray-800">
                                    CATÉGORIES
                                  </span>
                                  <br></br>
                                  <br></br>

                                  <div class="mb-4 flex items-center">
                                    {/* <select
                                    className="custom-select text-capitalize"
                                    value={category}
                                    onChange={handleCategory}
                                  >
                                    <option value="all">All Products</option> */}
                                    <div className="border border-gray-700">
                                      <ul className=" list-reset flex flex-col">
                                        {productsData
                                          ? productsData?.map(function (
                                              product,
                                              i
                                            ) {
                                              if (
                                                product.categorie == 'Homme'
                                              ) {
                                                return (
                                                  <div key={i}>
                                                    <li className="cursor-pointer p-4 hover:bg-yellow-100">
                                                      <button
                                                        onClick={() =>
                                                          filterResult(
                                                            product.sousCategorie
                                                          )
                                                        }
                                                      >
                                                        {product.sousCategorie}
                                                      </button>
                                                    </li>
                                                  </div>
                                                )
                                              }
                                              return null
                                            })
                                          : null}
                                      </ul>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-1  gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {productsData
                  ?.filter((product) => {
                    return product.categorie === 'Homme'
                  })
                  .map(function (product, i) {
                    console.log(productsData)
                    return (
                      <div className="mt-10 flex w-full " key={product._id}>
                        <div className=" mx-auto  w-full max-w-sm gap-10 bg-gray-200">
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
                    )
                  })}
              </div>
            </div>
            {/* <div className="flex justify-center">
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
            </div> */}
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
