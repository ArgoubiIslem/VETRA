import React from 'react'
import Navbar from './Navbar'

function Blogs() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-96 py-9 px-4 sm:w-auto md:py-12 md:px-6 lg:px-20 lg:py-16 2xl:container 2xl:mx-auto">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="font-mono text-3xl font-semibold leading-7 text-gray-800 underline xl:text-4xl xl:leading-9">
              Nouveaux produits
            </h1>
          </div>
          <div
            role="main"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="text-center text-4xl font-semibold leading-9 text-gray-800 dark:text-gray-50"></h1>
            <p className="mt-4 w-11/12 text-center text-base leading-normal text-gray-600 dark:text-white md:w-10/12 lg:w-1/2"></p>
          </div>
          <div className="mt-8 items-stretch md:mt-12 lg:flex">
            <div className="lg:w-1/2">
              <div className="items-center justify-between gap-x-6 sm:flex xl:gap-x-8">
                <div className="relative sm:w-1/2">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="5 text-xl font-semibold text-white"></h2>
                      <p className="mt-2 text-base leading-4 text-white"></p>
                      <a
                        href="javascript:void(0)"
                        className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="1.jpg"
                    className="w-full max-w-xs transition duration-300 ease-in-out hover:scale-110"
                    alt="chair"
                  />
                </div>
                <div className="relative mt-4 sm:mt-0 sm:w-1/2">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="5 text-xl font-semibold text-white"></h2>
                      <p className="mt-2 text-base leading-4 text-white"></p>
                      <a
                        href="javascript:void(0)"
                        className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="28.jpg"
                    className="w-full max-w-xs transition duration-300 ease-in-out hover:scale-110"
                    alt="wall design"
                  />
                </div>
              </div>
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-10">
                    <h2 className="5 text-xl font-semibold text-white"></h2>
                    <p className="mt-2 text-base leading-4 text-white"></p>
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="9.jpg"
                  alt="sitting place"
                  className="mt-8 hidden w-full transition duration-300 ease-in-out hover:scale-110 sm:block md:mt-6"
                />
                <img
                  className="mt-4 w-full sm:hidden"
                  src="7.jpg"
                  alt="sitting place"
                />
              </div>
            </div>
            <div className="mt-4 flex-col justify-between md:mt-6 lg:ml-4 lg:mt-0 lg:flex lg:w-1/2 xl:ml-8">
              <div className="relative">
                <div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-10">
                    <h2 className="5 text-xl font-semibold text-white"></h2>
                    <p className="mt-2 text-base leading-4 text-white"></p>
                    <a
                      href="javascript:void(0)"
                      className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                    >
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <img
                  src="19.jpg"
                  alt="sitting place"
                  className="hidden w-full transition duration-300 ease-in-out hover:scale-110 sm:block"
                />
                <img
                  className="w-full sm:hidden"
                  src="12.jpg"
                  alt="sitting place"
                />
              </div>
              <div className="mt-4 items-center justify-between gap-x-6 sm:flex md:mt-6 xl:gap-x-8">
                <div className="relative w-full">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="5 text-xl font-semibold text-white"></h2>
                      <p className="mt-2 text-base leading-4 text-white"></p>
                      <a
                        href="javascript:void(0)"
                        className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="11.jpg"
                    className="w-full transition duration-300 ease-in-out hover:scale-110"
                    alt="chair"
                  />
                </div>
                <div className="relative mt-4 w-full sm:mt-0">
                  <div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="5 text-xl font-semibold text-white"></h2>
                      <p className="mt-2 text-base leading-4 text-white"></p>
                      <a
                        href="javascript:void(0)"
                        className="mt-4 flex cursor-pointer items-center text-white hover:text-gray-200 hover:underline focus:underline focus:outline-none"
                      >
                        <p className="pr-2 text-sm font-medium leading-none">
                          Read More
                        </p>
                        <svg
                          className="fill-stroke"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.75 12.5L10.25 8L5.75 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    src="22.jpg"
                    className="w-full transition duration-300 ease-in-out hover:scale-110"
                    alt="wall design"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
