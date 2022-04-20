import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <div className="w-full">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"
      />

      <footer className="bg-gray-400 pt-10 sm:mt-10 ">
        <div className="m-auto flex max-w-6xl flex-wrap justify-center  text-gray-800 ">
          <div className="w-1/2 p-5 sm:w-4/12 md:w-3/12">
            <div className="mb-6 text-xl font-medium uppercase text-gray-900">
              CATÉGORIE
            </div>

            <Link href="ProdHomme">
              <a className="text-l my-3 block font-medium text-gray-800 duration-700 hover:text-gray-100">
                HOMME
              </a>
            </Link>
            <Link href="ProdFemme">
              <a className="text-l my-3 block font-medium text-gray-800 duration-700 hover:text-gray-100">
                FEMME
              </a>
            </Link>
            <Link href="ProdEnfant">
              <a className="text-l my-3 block font-medium text-gray-800 duration-700 hover:text-gray-100">
                ENFANT
              </a>
            </Link>
          </div>

          <div className="w-1/2 p-5 sm:w-4/12 md:w-3/12 ">
            <div className="mb-6 text-xl font-medium uppercase text-gray-900">
              PRODUITS
            </div>

            <a
              href="#"
              className="text-l my-3 block font-medium text-gray-800 duration-700 hover:text-gray-100"
            >
              NOUVEAUTÉS
            </a>
            <a
              href="#"
              className="text-l my-3 block font-medium text-gray-800 duration-700 hover:text-gray-100"
            >
              PROMOTIONS
            </a>
          </div>

          <div className="w-1/2 p-5 sm:w-4/12 md:w-3/12">
            <div className="mb-6 text-xl font-medium uppercase text-gray-900">
              GARANTIES
            </div>

            <a
              href="#"
              className="text-l my-3 block font-medium text-gray-800 duration-700 hover:text-gray-100"
            >
              QUI SOMMES-NOUS
            </a>
            <Link href="/Livraison">
              <a className="text-l my-3 block font-medium text-gray-800 duration-700 hover:text-gray-100">
                LIVRAISON À DOMICILE
              </a>
            </Link>
            <Link href="/Condition">
              <a
                href="#"
                className="text-l my-3 block font-medium text-gray-800 duration-700 hover:text-gray-100"
              >
                CONDITIONS GÉNÉRALES
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
