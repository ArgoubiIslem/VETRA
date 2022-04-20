import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <header className="flex items-center justify-between border-b-4 border-indigo-600 bg-white px-6 py-4">
      <div className="flex items-center">
        <button className="text-gray-500 focus:outline-none lg:hidden">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div class="flex items-center rounded-xl border-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            class="ml-2 w-full outline-none"
          />
        </div>
      </div>

      <div className="flex items-center">
        <button className="mx-4 flex text-gray-600 focus:outline-none">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="group inline-block">
          <button className="min-w-32 flex items-center rounded-sm border bg-white px-3 py-1 outline-none focus:outline-none">
            <span className="flex-1 pr-1 font-semibold">
              {' '}
              <button className="relative z-10 block h-8 w-8 overflow-hidden rounded-full shadow focus:outline-none">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                  alt="Your avatar"
                />
              </button>
            </span>
          </button>
          <ul className="min-w-32 absolute origin-top  scale-0 transform rounded-sm border bg-white transition duration-150 ease-in-out group-hover:scale-100">
            <Link
              href="/profile"
              className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
            >
              <a>
                <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                  Réglage
                </li>
              </a>
            </Link>
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">Profile</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
