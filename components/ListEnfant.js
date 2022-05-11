import React from 'react'

function ListEnfant() {
  return (
    <div>
      {/* <label className=" text-sm text-gray-600" for="cus_email">
        Sous categorie
      </label>
      <select
        name="SousCategorie"
        className="w-full rounded bg-gray-200 px-2 py-2 text-gray-700"
        required
      >
        <option value="DjebbaFilles" data-val="DjebbaFilles">
          Djebba Filles
        </option>
        <option value="DjebbaGarçons" data-val="DjebbaGarçons">
          Djebba Garçons
        </option>
        <option value="Autre" data-val="Autre">
          <input
            type="text"
            name="cat"
            className="bg-gray-200"
            placeholder="Autre"
          />
        </option>
      </select> */}
      <input
        list="browsers"
        name="browser"
        class="w-full appearance-none bg-gray-200 px-4 text-gray-800 outline-none"
      />
      <datalist id="browsers">
        <option value="DjebbaFilles" />
        <option value="DjebbaGarçons" />
      </datalist>
    </div>
  )
}

export default ListEnfant
