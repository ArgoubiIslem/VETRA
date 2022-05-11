import React from 'react'

function profile() {
  return (
    <div>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script>

      <div className="bg-gray-100">
        <div className="bg-main-color w-full text-white">
          <div
            x-data="{ open: false }"
            className="mx-auto flex max-w-screen-xl flex-col px-4 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
          >
            <div className="flex flex-row items-center justify-between p-4">
              <button className="focus:shadow-outline rounded-lg focus:outline-none md:hidden">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-6 w-6"
                >
                  <path
                    x-show="!open"
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    x-show="open"
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="group inline-block">
              <button className="min-w-32 flex items-center rounded-sm border bg-white px-3 py-1 outline-none focus:outline-none">
                <span className="flex-1 pr-1 font-semibold">
                  {' '}
                  <button className="relative z-10 block h-8 w-8 overflow-hidden rounded-full shadow focus:outline-none">
                    <img
                      className="h-full w-full object-cover"
                      src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                      alt="Your avatar"
                    />
                  </button>
                </span>
              </button>
              <ul className="min-w-32 absolute origin-top  scale-0 transform rounded-sm border bg-white transition duration-150 ease-in-out group-hover:scale-100">
                <a
                  className="block border-l-4 border-transparent p-2 hover:bg-gray-200 group-hover:border-blue-600 "
                  href="#"
                >
                  <li className="rounded-sm px-3 py-1 text-gray-900 hover:bg-gray-100">
                    Paramétres
                  </li>
                </a>
                <a
                  className="focus:shadow-outline mt-2 block bg-white px-4 py-2 text-sm hover:bg-indigo-100 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                  href="#"
                >
                  <li className="rounded-sm px-3 py-1 text-gray-900 hover:bg-gray-100 ">
                    Aide
                  </li>
                </a>
                <div className="border-b"></div>
                <a
                  className="focus:shadow-outline mt-2 block bg-white px-4 py-2 text-sm hover:bg-indigo-100 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                  href="#"
                >
                  <li className="rounded-sm px-3 py-1 text-gray-900 hover:bg-gray-100">
                    Deconnect
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End of Navbar --> */}

        <div className="container mx-auto my-5 p-5">
          <div className="no-wrap md:-mx-2 md:flex ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:mx-2 md:w-3/12">
              {/* <!-- Profile Card --> */}
              <div className="border-t-4 border-indigo-600 bg-white p-3">
                <div className="image overflow-hidden">
                  <img
                    className="mx-auto h-auto w-full"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                </div>
                <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                  Nom Prenom
                </h1>
                <h3 className="font-lg text-semibold leading-6 text-gray-600"></h3>
                <p className="text-sm leading-6 text-gray-500 hover:text-gray-600"></p>
                <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="rounded bg-indigo-600 py-1 px-2 text-sm text-white">
                        Active
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">Nov 07, 2016</span>
                  </li>
                </ul>
              </div>
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
              {/* <!-- Friends card --> */}

              {/* <!-- End of friends card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div className="mx-2 h-64 w-full md:w-9/12">
              {/* <!-- Profile tab --> */}
              {/* <!-- About Section --> */}
              <div className="rounded-sm bg-white p-3 shadow-sm">
                <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                  <span clas="text-green-500">
                    <svg
                      className="h-5 text-indigo-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide text-indigo-600">
                    à propos
                  </span>
                </div>
                <div className="text-gray-700">
                  <div className="grid text-sm md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Prenom</div>
                      <div className="px-4 py-2">Jane</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Nom</div>
                      <div className="px-4 py-2">Doe</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Genre</div>
                      <div className="px-4 py-2">Female</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Tele</div>
                      <div className="px-4 py-2">+11 998001001</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Adresse</div>
                      <div className="px-4 py-2">
                        Beech Creek, PA, Pennsylvania
                      </div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email</div>
                      <div className="px-4 py-2">
                        <a
                          className="text-blue-800"
                          href="mailto:jane@example.com"
                        >
                          jane@example.com
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Date de naissance
                      </div>
                      <div className="px-4 py-2">Feb 06, 1998</div>
                    </div>
                  </div>
                </div>
                <button className="focus:shadow-outline hover:shadow-xs my-4 block w-full rounded-lg p-3 text-sm font-semibold text-blue-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none">
                  Show Full Information
                </button>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              {/* <!-- Experience and education --> */}
              <div className="rounded-sm bg-white p-3 shadow-sm">
                <div className="">
                  <div>
                    <div>
                      <div class="mt-5 md:col-span-2 md:mt-0">
                        <form action="#" method="POST">
                          <div class="shadow sm:overflow-hidden sm:rounded-md">
                            <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                              <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                  <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                                    <span clas="text-green-500">
                                      <svg
                                        class="h-6 w-6 text-indigo-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        />
                                      </svg>
                                    </span>
                                    <span className="tracking-wide text-indigo-600">
                                      Modifier profile
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div class="hidden sm:block" aria-hidden="true">
                      <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                      </div>
                    </div>

                    <div class="mt-10 sm:mt-0">
                      <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                          <div class="px-4 sm:px-0">
                            <h3 class="text-lg font-medium leading-6 text-indigo-600">
                              Renseignements personnels
                            </h3>
                            <p class="mt-1 text-sm text-gray-600">
                              Utilisez une adresse permanente où vous pouvez
                              recevoir poster.
                            </p>
                          </div>
                        </div>
                        <div class="mt-5 md:col-span-2 md:mt-0">
                          <form action="#" method="POST">
                            <div class="overflow-hidden shadow sm:rounded-md">
                              <div class="bg-white px-4 py-5 sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                  <div class="col-span-6 sm:col-span-3">
                                    <label
                                      for="first-name"
                                      class="block text-sm font-medium text-gray-700"
                                    >
                                      Prenom
                                    </label>
                                    <input
                                      type="text"
                                      name="first-name"
                                      id="first-name"
                                      autocomplete="given-name"
                                      class="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                  </div>

                                  <div class="col-span-6 sm:col-span-3">
                                    <label
                                      for="last-name"
                                      class="block text-sm font-medium text-gray-700"
                                    >
                                      Nom
                                    </label>
                                    <input
                                      type="text"
                                      name="last-name"
                                      id="last-name"
                                      autocomplete="family-name"
                                      class="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div class="col-span-6 sm:col-span-3">
                                    <label
                                      for="country"
                                      class="block text-sm font-medium text-gray-700"
                                    >
                                      Genre
                                    </label>
                                    <select
                                      id="country"
                                      name="country"
                                      autocomplete="country-name"
                                      class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    >
                                      <option>Femme</option>
                                      <option>Homme</option>
                                    </select>
                                  </div>
                                  <div class="col-span-6 sm:col-span-3">
                                    <label
                                      for="last-name"
                                      class="block text-sm font-medium text-gray-700"
                                    >
                                      Date de naissance
                                    </label>
                                    <input
                                      type="date"
                                      name="last-name"
                                      id="last-name"
                                      autocomplete="family-name"
                                      class="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                  </div>

                                  <div class="col-span-6 sm:col-span-4">
                                    <label
                                      for="email-address"
                                      class="block text-sm font-medium text-gray-700"
                                    >
                                      Email
                                    </label>
                                    <input
                                      type="text"
                                      name="email-address"
                                      id="email-address"
                                      autocomplete="email"
                                      class="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                  </div>

                                  <div class="col-span-6">
                                    <label
                                      for="street-address"
                                      class="block text-sm font-medium text-gray-700"
                                    >
                                      Adresse
                                    </label>
                                    <input
                                      type="text"
                                      name="street-address"
                                      id="street-address"
                                      autocomplete="street-address"
                                      class="mt-1 block w-full border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                  <div class="col-span-6">
                                    <div>
                                      <label class="block text-sm font-medium text-gray-700">
                                        {' '}
                                        photo{' '}
                                      </label>
                                      <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                        <div class="space-y-1 text-center">
                                          <svg
                                            class="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                          >
                                            <path
                                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                              stroke-width="2"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                          </svg>
                                          <div class="flex text-sm text-gray-600">
                                            <label
                                              for="file-upload"
                                              class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                              <span>Upload a file</span>
                                              <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                class="sr-only"
                                              />
                                            </label>
                                            <p class="pl-1">or drag and drop</p>
                                          </div>
                                          <p class="text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <label
                                      for="city"
                                      class="block  text-sm font-medium text-gray-700"
                                    >
                                      Tele
                                    </label>
                                    <input
                                      type="Number"
                                      name="city"
                                      class="mt-1 block w-full border-2  border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div class=" bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button
                                  type="submit"
                                  class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                  Save
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div class="hidden sm:block" aria-hidden="true">
                      <div class="py-5">
                        <div class="border-t border-gray-200"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End of Experience and education grid --> */}
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default profile
