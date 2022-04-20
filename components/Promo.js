import React from 'react'
function Promo() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-mono text-3xl font-semibold leading-7 text-gray-800 underline xl:text-4xl xl:leading-9">
          produits en promo
        </h1>
      </div>
      <div className="flex h-full w-full items-center justify-center py-24 px-4 sm:py-8">
        <button
          aria-label="slide backward"
          className="absolute left-0 z-30 ml-10 cursor-pointer focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          id="prev"
        >
          <svg
            class="h-20 w-20 text-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {' '}
            <path stroke="none" d="M0 0h24v24H0z" />{' '}
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
        <div className="relative flex w-full items-center justify-center">
          <div className="mx-auto h-full w-full overflow-x-hidden overflow-y-hidden">
            <div
              id="slider"
              className="flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8"
            >
              <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                <img
                  src="https://i.pinimg.com/564x/3b/52/1a/3b521a623aaf28bd5d3432af6fdf5bbb.jpg"
                  className="h-96  w-full object-cover object-center"
                />
                <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                  <span class="inline-block rounded bg-[#E4187D] px-2 text-sm text-white">
                    PROMO
                  </span>
                  <div className="flex h-full items-end pb-6">
                    <div class="h-23 w-96 bg-gray-800 bg-opacity-50 py-4 px-4">
                      <h3 class="text-md font-semibold text-gray-100">
                        Nom de produit
                      </h3>
                      <p class="mt-4  text-gray-100">Prix</p>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                <img
                  src="https://i.pinimg.com/564x/1d/82/b5/1d82b5d05aca53cd6e683f6867aed229.jpg"
                  alt="sitting area"
                  className="h-96  w-full object-cover object-center"
                />
                <div className="absolute h-full w-full bg-gray-800  bg-opacity-50  p-6">
                  <span class="inline-block rounded bg-[#E4187D] px-2 text-sm text-white">
                    PROMO
                  </span>
                  <div className="flex h-full items-end pb-6">
                    <div class="h-23 w-96 bg-gray-900 bg-opacity-50 py-4 px-4">
                      <h3 class="text-md font-semibold text-gray-100">
                        Nom de produit
                      </h3>
                      <p class="mt-4  text-gray-100">Prix</p>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                <img
                  src="https://i.pinimg.com/736x/b8/ed/87/b8ed8733ee0d25fc2c337c854d0c651b.jpg"
                  alt="sitting area"
                  className="h-96 w-full object-cover object-center"
                />
                <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                  <span class="inline-block rounded bg-[#E4187D] px-2 text-sm text-white">
                    PROMO
                  </span>
                  <div className="flex h-full items-end pb-6">
                    <div class="h-23  w-96 bg-gray-800 bg-opacity-50 py-4 px-4">
                      <h3 class="text-md font-semibold text-gray-100">
                        Nom de produit
                      </h3>
                      <p class="mt-4  text-gray-100">Prix</p>
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex w-full flex-shrink-0 sm:w-auto">
                <img
                  src="https://i.pinimg.com/736x/b8/ed/87/b8ed8733ee0d25fc2c337c854d0c651b.jpg"
                  alt="sitting area"
                  className="h-96 w-full object-cover object-center"
                />
                <div className="absolute h-full w-full bg-gray-800 bg-opacity-30 p-6">
                  <span class="inline-block rounded bg-[#E4187D] px-2 text-sm text-white">
                    PROMO
                  </span>
                  <div className="flex h-full items-end pb-6">
                    <div class="h-23 w-96 bg-gray-900 bg-opacity-50 py-4 px-4">
                      <h3 class="text-md font-semibold text-gray-100">
                        Nom de produit
                      </h3>
                      <p class="mt-4  text-gray-100">Prix</p>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          aria-label="slide forward"
          className="absolute right-0 z-30 mr-10 focus:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          id="next"
        >
          <svg
            class="h-20 w-20 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Promo
