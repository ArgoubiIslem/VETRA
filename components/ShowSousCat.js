import { Link } from 'next/link'
import React from 'react'

function ShowSousCat({ product }) {
  return (
    <div className="mt-10 flex w-full ">
      <div className=" mx-auto  w-full max-w-sm gap-10 bg-gray-200">
        <div className="min-h-80  aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
          <img
            className="h-full w-full object-cover object-center lg:h-full lg:w-full "
            src={product.image}
            alt=""
          />
        </div>
        <div className="px-5 py-3">
          <span className="mt-2 text-gray-500">{product.nom}</span>
          <br></br>
          <span className="mt-2 text-gray-500">{product.prix} DT</span>
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
}

export default ShowSousCat
