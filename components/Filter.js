import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Marque from '../components/Marque'

function Filter() {
  const [productsData, setProductsData] = useState(null)
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
                        <label
                          for="checkbox-1"
                          class="ml-3 text-sm font-medium text-gray-900 "
                        >
                          {product.sousCategorie}
                        </label>
                      </div>
                    )
                  })}
                </fieldset>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Filter
