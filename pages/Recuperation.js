import React from 'react'
import Footer from '../components/Footer'
import Headers from '../components/Headers'
import Link from 'next/link'

function Recuperation() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col  pt-6 sm:pt-0">
      <Headers />
    
  <div className="w-full sm:max-w-md p-5 mx-auto">
    <h6 className="block mb-1 font-extrabold">Réinitialiser votre mot de passe</h6>
    <p>Veuillez entrer l'adresse e-mail que vous avez utilisée pour vous inscrire. Vous recevrez un lien temporaire pour réinitialiser votre mot de passe.</p>
    <form>
      <div className="mb-4">
        <label className="block mb-1" for="email">Email</label>
        <input id="email" type="email" name="email" className="py-2 px-3 border border-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
      </div>
      <div className="mt-6">
        <Link href="">
        <a className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25 transition">
        Réinitialisation de mot de passe
        </a>
        </Link>
      </div>
      
      
    </form>
  </div>
 
    <Footer />
</div>
  )
}

export default Recuperation
