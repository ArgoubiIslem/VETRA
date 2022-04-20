import React, { useState } from 'react'
import Link from 'next/link'
import Dashboard from './Dashboard'
import DashboardLayout from '../pages/DashboardLayout'
function Sidebar({ dash, prod, order, four, cat, event }) {
  // const [showDashboard, setShowDashboard] = useState(true)
  // const [showProduits, setShowProduits] = useState(false)
  // const [showOrders, setShowOrders] = useState(false)
  // const [showVendeurs, setShowVendeurs] = useState(false)
  // const [showCategories, setShowCategories] = useState(false)
  return (
    <div className="flex">
      <div className="fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden"></div>

      <div className="fixed inset-y-0 left-0 z-30 w-64 transform overflow-y-auto bg-gray-900 transition duration-300 lg:static lg:inset-0 lg:translate-x-0">
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center">
            <svg
              className="h-12 w-12"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                fill="#4C51BF"
                stroke="#4C51BF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                fill="white"
              />
            </svg>

            <span className="mx-2 text-2xl font-semibold text-white">
              VETRA
            </span>
          </div>
        </div>

        <nav className="mt-10">
          <ul>
            <li
              onClick={() =>
                order(false) ||
                dash(true) ||
                prod(false) ||
                four(false) ||
                cat(false) ||
                event(false)
              }
              className="mt-4 flex cursor-pointer space-x-2 px-6 py-4 font-bold text-white transition duration-100 hover:rounded-br-3xl hover:bg-white hover:text-blue-800"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
                  fill="currentColor"
                />
                <path
                  d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
                  fill="currentColor"
                />
              </svg>

              {/* <Link
                href="/DashboardLayout"
                className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
              > */}
              <a
                onClick={() =>
                  order(false) ||
                  dash(true) ||
                  prod(false) ||
                  four(false) ||
                  cat(false) ||
                  event(false)
                }
              >
                <span className="mx-4">Tableau de bord</span>
              </a>
              {/* </Link> */}
            </li>
            <li
              onClick={() =>
                order(false) ||
                dash(false) ||
                prod(true) ||
                four(false) ||
                cat(false) ||
                event(false)
              }
              className="mt-4 flex cursor-pointer space-x-2 px-6 py-4 font-bold text-white transition duration-100 hover:rounded-br-3xl hover:bg-white hover:text-blue-800"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {/* <Link
                href="/produits"
                className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
              > */}
              <a
                onClick={() =>
                  order(false) ||
                  dash(false) ||
                  prod(true) ||
                  four(false) ||
                  cat(false) ||
                  event(false)
                }
              >
                <span className="mx-4">Produits</span>
              </a>

              {/* </Link> */}
            </li>
            <li
              onClick={() =>
                order(true) ||
                dash(false) ||
                prod(false) ||
                four(false) ||
                cat(false) ||
                event(false)
              }
              className="mt-4 flex cursor-pointer space-x-2 px-6 py-4 font-bold text-white transition duration-100 hover:rounded-br-3xl hover:bg-white hover:text-blue-800"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              {/* <Link
                href="/orders"
                className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
              >
                <a>
                  {' '}
                  <span className="mx-4">Orders</span>
                </a>
              </Link> */}
              <a
                onClick={() =>
                  order(true) ||
                  dash(false) ||
                  prod(false) ||
                  four(false) ||
                  cat(false) ||
                  event(false)
                }
              >
                <span className="mx-4">Commandes</span>
              </a>
            </li>
            <li
              onClick={() =>
                order(false) ||
                dash(false) ||
                prod(false) ||
                four(true) ||
                cat(false) ||
                event(false)
              }
              className="mt-4 flex cursor-pointer space-x-2 px-6 py-4 font-bold text-white transition duration-100 hover:rounded-br-3xl hover:bg-white hover:text-blue-800"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {/* <Link
                href="/vendeurs"
                className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
              >
                <a>
                  <span className="mx-4">Les vendeurs</span>
                </a>
              </Link> */}
              <a
                onClick={() =>
                  order(false) ||
                  dash(false) ||
                  prod(false) ||
                  four(true) ||
                  cat(false) ||
                  event(false)
                }
              >
                <span className="mx-4">Fournissuers</span>
              </a>
            </li>
            <li
              onClick={() =>
                order(false) ||
                dash(false) ||
                prod(false) ||
                four(false) ||
                cat(true) ||
                event(false)
              }
              className="mt-4 flex cursor-pointer space-x-2 px-6 py-4 font-bold text-white transition duration-100 hover:rounded-br-3xl hover:bg-white hover:text-blue-800"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                stroke="currentColor"
                fill="none"
                width="24"
                height="24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <rect x="4" y="4" width="6" height="6" rx="1" />{' '}
                <rect x="4" y="14" width="6" height="6" rx="1" />{' '}
                <rect x="14" y="14" width="6" height="6" rx="1" />{' '}
                <line x1="14" y1="7" x2="20" y2="7" />{' '}
                <line x1="17" y1="4" x2="17" y2="10" />
              </svg>
              {/* <Link
                href="/categorie"
                className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
              >
                <a>
                  <span className="mx-4">Catégories</span>
                </a>
              </Link> */}
              <a>
                <span className="mx-4">Catégories</span>
              </a>
            </li>
            <li
              onClick={() =>
                order(false) ||
                dash(false) ||
                prod(false) ||
                four(false) ||
                cat(false) ||
                event(true)
              }
              className="mt-4 flex cursor-pointer space-x-2 px-6 py-4 font-bold text-white transition duration-100 hover:rounded-br-3xl hover:bg-white hover:text-blue-800"
            >
              <svg
                class="h-6 w-6 text-white"
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
                <rect x="4" y="5" width="16" height="16" rx="2" />{' '}
                <line x1="16" y1="3" x2="16" y2="7" />{' '}
                <line x1="8" y1="3" x2="8" y2="7" />{' '}
                <line x1="4" y1="11" x2="20" y2="11" />{' '}
                <rect x="8" y="15" width="2" height="2" />
              </svg>

              {/* <Link
                href="/DashboardLayout"
                className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
              > */}
              <a
                onClick={() =>
                  order(false) ||
                  dash(false) ||
                  prod(false) ||
                  four(false) ||
                  cat(false) ||
                  event(true)
                }
              >
                <span className="mx-4">Evenement</span>
              </a>
              {/* </Link> */}
            </li>
            <li class="mt-4 flex cursor-pointer space-x-2 px-6 py-4 font-bold text-white transition duration-100 hover:rounded-br-3xl hover:bg-white hover:text-blue-800">
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                width="24"
                height="24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {' '}
                <path stroke="none" d="M0 0h24v24H0z" />{' '}
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{' '}
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
              <Link
                href="/"
                className="mt-4 flex items-center border-l-4 px-6 py-2 duration-200"
              >
                <a>
                  {' '}
                  <span className="mx-4">Se deconnect</span>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
