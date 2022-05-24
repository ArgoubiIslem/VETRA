import React from 'react'

function PromoComp({ product }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true)
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="left-100  fixed top-40  z-50 mx-auto  max-h-full w-full rounded-md bg-gray-100 p-5 sm:max-w-md">
      <h6 className="mb-1 block font-extrabold"></h6>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            name="Product"
            type="text"
            key={product._id}
            data-val={product._id}
            value={product._id}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
          />
          <label className="mb-1 block " htmlFor="date">
            Date début
          </label>
          <input
            name="dateDebut"
            type="date"
            required=""
            placeholder=""
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block" htmlFor="date">
            Date fin
          </label>
          <input
            name="dateFin"
            type="date"
            required=""
            placeholder=""
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="mb-1 block" htmlFor="remise">
            Remise
          </label>
          <input
            name="remise"
            type="Number"
            required=""
            placeholder=""
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-semibold capitalize text-white transition hover:bg-blue-700 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-700 disabled:opacity-25"
          >
            Enregistrer
          </button>
        </div>
      </form>
    </div>
  )
}

export default PromoComp
