import React, { useState } from 'react'
import Link from 'next/link'

function Marque() {
  return (
    <div className="container mx-auto flex px-6 ">
      <div className="bg-white-100 fixed inset-y-0 left-0 z-30 w-64  transform transition duration-300 lg:static lg:translate-x-0">
        <nav className="mt-5">
          <ul>
            <li>
              <div class=" absolute mb-6 flex h-64  max-w-xs flex-col justify-between   bg-white py-5 px-4 ">
                {' '}
                <fieldset>
                  <span class="mb-1 p-2 font-semibold text-gray-800">
                    MARQUE
                  </span>
                  <br></br>
                  <br></br>
                  <div class="mb-4 flex items-center">
                    <input
                      id="checkbox-1"
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      class="h-4 w-4 rounded border-yellow-500 bg-yellow-500 text-yellow-500 focus:ring-2 focus:ring-yellow-500 dark:border-gray-600 dark:bg-yellow-500 dark:ring-offset-yellow-500 dark:focus:ring-yellow-500"
                    />
                    <label
                      for="checkbox-1"
                      class="ml-3 text-sm font-medium text-gray-900 "
                    >
                      QOFTANNE
                    </label>
                  </div>
                  <div class="mb-4 flex items-center">
                    <input
                      id="checkbox-1"
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      class="h-4 w-4 rounded border-yellow-500 bg-yellow-500 text-yellow-500 focus:ring-2 focus:ring-yellow-500 dark:border-yellow-500 dark:bg-yellow-500 dark:ring-offset-yellow-500 dark:focus:ring-yellow-500"
                    />
                    <label
                      for="checkbox-1"
                      class="ml-3 text-sm font-medium text-gray-900 "
                    >
                      FOUTA && BLOUSA
                    </label>
                  </div>
                  <div class="mb-4 flex items-center">
                    <input
                      id="checkbox-1"
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      class="h-4 w-4 rounded border-yellow-500 bg-yellow-500 text-yellow-500 focus:ring-2 focus:ring-yellow-500 dark:border-yellow-500 dark:bg-yellow-500 dark:ring-offset-yellow-500 dark:focus:ring-yellow-500"
                    />
                    <label
                      for="checkbox-1"
                      class="ml-3 text-sm font-medium text-gray-900 "
                    >
                      SAFSARI
                    </label>
                  </div>
                  <div class="mb-4 flex items-center">
                    <input
                      id="checkbox-1"
                      aria-describedby="checkbox-1"
                      type="checkbox"
                      class="h-4 w-4 rounded border-yellow-500 bg-yellow-500 text-yellow-500 focus:ring-2 focus:ring-yellow-500 dark:border-yellow-500 dark:bg-yellow-500 dark:ring-offset-yellow-500 dark:focus:ring-yellow-500"
                    />
                    <label
                      for="checkbox-1"
                      class="ml-3 text-sm font-medium text-gray-900 "
                    >
                      PULLE FATHILHA
                    </label>
                  </div>
                </fieldset>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Marque
