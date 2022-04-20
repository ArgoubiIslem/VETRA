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
            <nav className="hidden flex-grow flex-col pb-4 md:flex md:flex-row md:justify-end md:pb-0">
              <div className="relative" x-data="{ open: false }">
                <button className="focus:shadow-outline mt-2 flex w-full flex-row items-center space-x-2 bg-transparent px-4 py-2 text-left text-sm font-semibold  hover:bg-gray-200 focus:bg-blue-800 focus:outline-none md:mt-0 md:ml-4 md:inline md:w-auto">
                  <span>Nom Prenom</span>
                  <img
                    className="inline h-6 rounded-full"
                    src="https://avatars2.githubusercontent.com/u/24622175?s=60&amp;v=4"
                  />
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="inline h-4 w-4 transform transition-transform duration-200"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-full origin-top-right rounded-md shadow-lg md:w-48">
                  <div className="border-main-color rounded-sm border bg-white py-2 text-sm text-blue-800 shadow-sm">
                    <a
                      className="focus:shadow-outline mt-2 block bg-white px-4 py-2 text-sm hover:bg-indigo-100 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                      href="#"
                    >
                      Settings
                    </a>
                    <a
                      className="focus:shadow-outline mt-2 block bg-white px-4 py-2 text-sm hover:bg-indigo-100 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                      href="#"
                    >
                      Help
                    </a>
                    <div className="border-b"></div>
                    <a
                      className="focus:shadow-outline mt-2 block bg-white px-4 py-2 text-sm hover:bg-indigo-100 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                      href="#"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* <!-- End of Navbar --> */}

        <div className="container mx-auto my-5 p-5">
          <div className="no-wrap md:-mx-2 md:flex ">
            {/* <!-- Left Side --> */}
            <div className="w-full md:mx-2 md:w-3/12">
              {/* <!-- Profile Card --> */}
              <div className="border-t-4 border-green-400 bg-white p-3">
                <div className="image overflow-hidden">
                  <img
                    className="mx-auto h-auto w-full"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                </div>
                <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                  Jane Doe
                </h1>
                <h3 className="font-lg text-semibold leading-6 text-gray-600">
                  Owner at Her Company Inc.
                </h3>
                <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, eligendi dolorum sequi illum qui unde
                  aspernatur non deserunt
                </p>
                <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="rounded bg-green-500 py-1 px-2 text-sm text-white">
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
                      className="h-5"
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
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid text-sm md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">Jane</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">Doe</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">Female</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">+11 998001001</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Current Address
                      </div>
                      <div className="px-4 py-2">
                        Beech Creek, PA, Pennsylvania
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Permanant Address
                      </div>
                      <div className="px-4 py-2">
                        Arlington Heights, IL, Illinois
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
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
                      <div className="px-4 py-2 font-semibold">Birthday</div>
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
                <div className="grid grid-cols-2">
                  <div>
                    <div className="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Experience</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-xs text-gray-500">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-xs text-gray-500">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-xs text-gray-500">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Owner at Her Company Inc.
                        </div>
                        <div className="text-xs text-gray-500">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="mb-3 flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">
                          Masters Degree in Oxford
                        </div>
                        <div className="text-xs text-gray-500">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">
                          Bachelors Degreen in LPU
                        </div>
                        <div className="text-xs text-gray-500">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
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
