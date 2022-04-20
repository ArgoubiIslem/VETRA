import React from 'react'
import Link from 'next/link'
function ShopCategorie() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-mono text-3xl font-semibold leading-7 text-gray-800 underline xl:text-4xl xl:leading-9">
          Consulter par catégorie
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full py-12 px-4 sm:px-6 xl:px-20 2xl:container 2xl:mx-auto 2xl:px-0">
          <div className="jusitfy-center flex flex-col items-center space-y-10">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 md:gap-x-4  lg:grid-cols-3">
              <div className="group relative flex h-full w-full items-center justify-center">
                <img
                  className="h-full w-full object-cover object-center"
                  src="2.jpg"
                  alt="girl-image"
                />
                <Link href="ProdFemme">
                  <button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white">
                    Femme
                  </button>
                </Link>
                <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 py-6 px-20 opacity-0 transition duration-500 group-hover:opacity-100"></div>
              </div>

              <div className="mt-4 flex flex-col space-y-4 md:mt-0 md:space-y-8">
                <div className="group relative flex h-full w-full items-center justify-center">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="14.jpg"
                    alt="shoe-image"
                  />
                  <Link href="ProdEnfant">
                    <button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white">
                      Enfant
                    </button>
                  </Link>
                  <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 py-6 px-20 opacity-0 transition duration-500 group-hover:opacity-100"></div>
                </div>
              </div>

              <div className="group relative hidden h-full w-full items-center justify-center lg:flex">
                <img
                  className="h-full w-full object-cover object-center"
                  src="8.jpg"
                  alt="girl-image"
                />
                <Link href="ProdHomme">
                  <button className="absolute bottom-4 z-10 w-36 bg-white py-3 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:bg-gray-800 dark:text-white">
                    Homme
                  </button>
                </Link>
                <div className="absolute bottom-3 z-0 w-36 bg-white bg-opacity-50 py-6 px-20 opacity-0 transition duration-500 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopCategorie
