import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Marque from '../components/Marque'
import filterSearch from '../utils/filterSearch'
import { useRouter } from 'next/router'
function Filter({ state }) {
  const [productsData, setProductsData] = useState(null)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const router = useRouter()
  const handleCategory = (e) => {
    setCategory(e.target.value)
    filterSearch({ router, category: e.target.value })
  }
  useEffect(() => {
    filterSearch({ router, search: search ? search.toLowerCase() : 'all' })
  }, [search])

  const filterResult = (catItem) => {
    const result = productsData?.filter((curData) => {
      setCategory(e.target.value)
      return curData.categorie === catItem
    })
    setProductsData(result)
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

                  <div class="mb-4 flex items-center">
                    <select
                      className="custom-select text-capitalize"
                      value={category}
                      onChange={handleCategory}
                    >
                      <option value="all">All Products</option>

                      {productsData?.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.sousCategorie}
                        </option>
                      ))}
                    </select>
                  </div>
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
