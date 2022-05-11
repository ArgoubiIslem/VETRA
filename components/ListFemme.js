import React from 'react'

function ListFemme() {
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
        <option value="Djebba" data-val="Djebba">
          Djebba
        </option>
        <option value="Qoftanne" data-val="Qoftanne">
          Qoftanne
        </option>
        <option value="Safsari" data-val="Safsari">
          Safsari
        </option>
        <option value="FoutaBlousa" data-val="FoutaBlousa">
          Fouta && Blousa
        </option>
        <option value="Pullefathilha" data-val="Pullefathilha">
          Pulle fathilha
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
        <option value="Djebba" />
        <option value="Qoftanne" />
        <option value="FoutaBlousa" />
        <option value="Pullefathilha" />
      </datalist>
    </div>
  )
}

export default ListFemme
