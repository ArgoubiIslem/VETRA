import React from 'react'

function ListHomme() {
  return (
    <div>
      <label className=" text-sm text-gray-600" for="cus_email">
        Sous categorie
      </label>
      <select
        name="SousCategorie"
        className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
        required
      >
        <option value="Djebba" data-val="Djebba">
          Djebba
        </option>
        <option value="Burnouse" data-val="Burnouse">
          Burnouse
        </option>
        <option value="Derngri" data-val="Derngri">
          Derngri
        </option>
      </select>
    </div>
  )
}

export default ListHomme
