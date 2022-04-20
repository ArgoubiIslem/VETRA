import React, { useEffect, useState } from 'react'

function List({ cat }) {
  const [productsData, setProductsData] = useState(null)

  useEffect(() => {
    async function getSousCategorie() {
      try {
        const response = await fetch('http://localhost:3000/api/souscategories')

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`)
        }

        const result = await response.json()
        console.log(result['data'])
        setProductsData(result['data'])
        // setListSous(result['data']['categorieLib'])
        return result
      } catch (err) {
        console.log(err)
      }
    }

    // declare the async data fetching function

    // call the function
    getSousCategorie()
      // make sure to catch any error
      .catch(console.error)
  }, [])

  return (
    <select
      name="SousCategorie"
      className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
      required
    >
      {productsData?.map(function (sous, i) {
        if (sous.Categorie == cat) {
          return (
            <option value="Pullefathilha" data-val="Pullefathilha">
              {sous.SousCatLib}
            </option>
          )
        }
      })}
    </select>
  )
}

export default List
