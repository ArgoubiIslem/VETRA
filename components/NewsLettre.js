import React from 'react'

const NewsLettre = () => {
  return (
    <div className="mx-4 py-16 2xl:container 2xl:mx-auto">
      <div className="relative flex w-full items-center justify-center">
        <img
          src="T.JPEG"
          alt="dining"
          className="absolute z-0 hidden h-full w-full xl:block"
        />
        <img
          src=""
          alt="dining"
          className="absolute z-0 hidden h-full w-full sm:block xl:hidden"
        />
        <img
          src=""
          alt="dining"
          className="absolute z-0 h-full w-full sm:hidden"
        />
        <div className="relative z-40 flex w-full flex-col items-center justify-center bg-opacity-80 py-10 px-4 md:my-16 md:mx-24 md:px-12 lg:py-16">
          <h1 className="text-center text-4xl font-semibold leading-9 text-white">
            Ne manquez pas!
          </h1>
          <p className="mt-6 text-center text-base leading-normal text-white">
            Abonnez-vous à votre newsletter pour rester informé. Notre
            newsletter est envoyée une fois par une semaine tous les vendredis
            alors abonnez-vous pour recevoir les dernières nouvelles et mises à
            jour.
          </p>
          <div className="mt-12 flex w-full flex-col items-center space-y-4 border-white sm:flex-row sm:space-y-0 sm:border lg:w-5/12">
            <input
              className="w-full border border-white bg-transparent p-4 text-base font-medium leading-none text-white placeholder-white focus:outline-none sm:border-transparent"
              placeholder="Adresse email"
            />
            <button className="w-full border border-white bg-white py-4 px-6 hover:bg-opacity-75 focus:outline-none focus:ring focus:ring-offset-2 sm:w-auto sm:border-transparent">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLettre
