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

function ProdFemme() {
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
          <Breadcrumb />
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

                                    {productsData
                                      ? productsData?.map(function (
                                          product,
                                          i
                                        ) {
                                          if (product.categorie == 'Femme') {
                                            return (
                                              <div key={i}>
                                                <button
                                                  onClick={() =>
                                                    filterResult(
                                                      product.sousCategorie
                                                    )
                                                  }
                                                >
                                                  {product.sousCategorie}
                                                </button>
                                                <br></br>
                                              </div>
                                            )
                                          }
                                          return null
                                        })
                                      : null}
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
                    return product.categorie === 'Femme'
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

export default ProdFemme
