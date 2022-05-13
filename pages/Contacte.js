import React from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Media from '../components/Media'
import Headers from '../components/Headers'
import Navbar from '../components/Navbar'
function Contacte() {
  return (
    <div>
      <Headers />
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="flex min-h-screen w-full flex-col items-center bg-gray-50 pt-6 sm:justify-center sm:pt-0">
        <div className="mx-auto w-full p-5 sm:max-w-md">
          <h6 className="mb-1 block font-extrabold">CONTACTEZ-NOUS</h6>
          <form>
            <div className="mb-4">
              <label className="mb-1 block" for="nom">
                Nom et Prénom
              </label>
              <input
                id="nom"
                type="text"
                name="nom"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" for="email">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" for="tel">
                Num tél
              </label>
              <input
                id="tel"
                type="tel"
                name="tel"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block" for="message">
                Votre message
              </label>
              <input
                id="message"
                type="text"
                name="message"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100"
              />
            </div>
            <div className="mt-6">
              <Link href="/Dashboard">
                <a className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 font-semibold capitalize text-white transition hover:bg-blue-700 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-700 disabled:opacity-25">
                  Envoyer
                </a>
              </Link>
            </div>
          </form>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Contacte
