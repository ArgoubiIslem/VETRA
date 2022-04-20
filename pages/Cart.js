import React from 'react'

function Cart() {
  return (
    <div>
      <body className="bg-gray-100">
        <div className="container mx-auto mt-10">
          <div className="my-10 flex shadow-md">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="text-2xl font-semibold">Panier</h1>
                <h2 className="text-2xl font-semibold">3 Articles</h2>
              </div>
              <div className="mt-10 mb-5 flex">
                <h3 className="w-2/5 text-xs font-semibold uppercase text-gray-600">
                  détails du produit
                </h3>
                <h3 className="w-1/5  text-center text-xs font-semibold uppercase text-gray-600">
                  Quantité
                </h3>
                <h3 className="w-1/5  text-center text-xs font-semibold uppercase text-gray-600">
                  Prix
                </h3>
                <h3 className="w-1/5  text-center text-xs font-semibold uppercase text-gray-600">
                  Totale
                </h3>
              </div>
              <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100">
                <div className="flex w-2/5">
                  {/* <!-- product --> */}
                  <div className="w-20">
                    <img
                      className="h-24"
                      src="https://i.pinimg.com/564x/3b/52/1a/3b521a623aaf28bd5d3432af6fdf5bbb.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 flex flex-grow flex-col justify-between">
                    <span className="text-sm font-bold">Nom de produit</span>
                    <span className="text-xs text-red-500">Marque</span>
                    <a
                      href="#"
                      className="text-xs font-semibold text-gray-500 hover:text-red-500"
                    >
                      Retirer
                    </a>
                  </div>
                </div>
                <div className="flex w-1/5 justify-center">
                  <svg
                    className="w-3 fill-current text-gray-600"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="mx-2 w-8 border text-center"
                    type="text"
                    value="1"
                  />

                  <svg
                    className="w-3 fill-current text-gray-600"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="w-1/5 text-center text-sm font-semibold">
                  Prix DT
                </span>
                <span className="w-1/5 text-center text-sm font-semibold">
                  Totale DT
                </span>
              </div>

              <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100">
                <div className="flex w-2/5">
                  {/* <!-- product --> */}
                  <div className="w-20">
                    <img
                      className="h-24"
                      src="https://i.pinimg.com/564x/1d/82/b5/1d82b5d05aca53cd6e683f6867aed229.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 flex flex-grow flex-col justify-between">
                    <span className="text-sm font-bold">Nom de produit</span>
                    <span className="text-xs text-red-500">Marque</span>
                    <a
                      href="#"
                      className="text-xs font-semibold text-gray-500 hover:text-red-500"
                    >
                      Retirer
                    </a>
                  </div>
                </div>
                <div className="flex w-1/5 justify-center">
                  <svg
                    className="w-3 fill-current text-gray-600"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>

                  <input
                    className="mx-2 w-8 border text-center"
                    type="text"
                    value="1"
                  />

                  <svg
                    className="w-3 fill-current text-gray-600"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="w-1/5 text-center text-sm font-semibold">
                  Prix DT
                </span>
                <span className="w-1/5 text-center text-sm font-semibold">
                  Totale DT
                </span>
              </div>

              <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100">
                <div className="flex w-2/5">
                  {/* <!-- product --> */}
                  <div className="w-20">
                    <img
                      className="h-24"
                      src="https://i.pinimg.com/736x/b8/ed/87/b8ed8733ee0d25fc2c337c854d0c651b.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 flex flex-grow flex-col justify-between">
                    <span className="text-sm font-bold">Nom de produit</span>
                    <span className="text-xs text-red-500">Marque</span>
                    <a
                      href="#"
                      className="text-xs font-semibold text-gray-500 hover:text-red-500"
                    >
                      Retirer
                    </a>
                  </div>
                </div>
                <div className="flex w-1/5 justify-center">
                  <svg
                    className="w-3 fill-current text-gray-600"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                  <input
                    className="mx-2 w-8 border text-center"
                    type="text"
                    value="1"
                  />

                  <svg
                    className="w-3 fill-current text-gray-600"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>
                <span className="w-1/5 text-center text-sm font-semibold">
                  Prix DT
                </span>
                <span className="w-1/5 text-center text-sm font-semibold">
                  Totale DT
                </span>
              </div>

              <a
                href="#"
                className="mt-10 flex text-sm font-semibold text-yellow-400"
              >
                <svg
                  className="mr-2 w-4 fill-current text-yellow-400"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continuer vos achats
              </a>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="border-b pb-8 text-2xl font-semibold">
                Récapitulatif de la commande
              </h1>
              <div className="mt-10 mb-5 flex justify-between">
                <span className="text-sm font-semibold uppercase">
                  Articles 3
                </span>
                <span className="text-sm font-semibold">Prix DT</span>
              </div>
              <div>
                <label className="mb-3 inline-block text-sm font-medium uppercase">
                  Expédition
                </label>
                <select className="block w-full p-2 text-sm text-gray-600">
                  <option>Expédition standard </option>
                </select>
              </div>
              <div className="py-10">
                <label
                  for="promo"
                  className="mb-3 inline-block text-sm font-semibold uppercase"
                >
                  Code promo
                </label>
                <input
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="w-full p-2 text-sm"
                />
              </div>
              <button className="bg-red-500 px-5 py-2 text-sm uppercase text-white hover:bg-red-600">
                Appliquer
              </button>
              <div className="mt-8 border-t">
                <div className="flex justify-between py-6 text-sm font-semibold uppercase">
                  <span>Coût total</span>
                  <span>Totale DT</span>
                </div>
                <button className="w-full bg-yellow-400 py-3 text-sm font-semibold uppercase text-white hover:bg-yellow-400">
                  Vérifier
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Cart
