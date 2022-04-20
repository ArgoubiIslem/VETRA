

import React from 'react'

function profile() {
  return (
    
    <div  className="container mx-auto pt-4 px-4 py-16 ">
    
    <h3 className="text-3xl font-medium text-gray-700 mb-8">Réglage de profile</h3>
    <section className="text-gray-600 body-font  m-0 p-0 relative">
    

    <div className="container    mx-auto">
        <div className="flex flex-col text-center w-full mb-1">

        </div>

        <div className="mt-10 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-2 py-8 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label for="first-name" className="block text-sm font-medium text-gray-700">Nom</label>
                                <input type="text" name="first-name" id="first-name" placeholder='nom'
                                    autocomplete="given-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label for="last-name" className="block text-sm font-medium text-gray-700">
                                    Prénom</label>
                                <input type="text" name="last-name"  id="last-name" placeholder='prenom'
                                    autocomplete="family-name"
                                    className="mt-1 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for="last-name" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="last-name" placeholder="email@gmail.com" id="last-name"
                                    autocomplete="family-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>




                            <div className="col-span-6 sm:col-span-3">
                                <label for="last-name" className="block text-sm font-medium text-gray-700">
                                    Numero de telephone</label>
                                <input type="tel" name="last-name" placeholder="12345678" id="last-name"
                                    autocomplete="family-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>



                  

                            <div className="col-span-6 sm:col-span-6">
                                <label for="email-address" className="block text-sm font-medium text-gray-700">Adresse</label>
                                <input type="text" name="email-address"
                                    placeholder="adresse"
                                    id="email-address" autocomplete="email"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>


                            <div className="col-span-6 sm:col-span-3">
                                <label for="last-name" className="block text-sm font-medium text-gray-700">
                                    Date d'annversaire</label>
                                <input type="date" name="last-name" placeholder="3" id="last-name"
                                    autocomplete="family-name"
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label for="last-name" className="block text-sm font-medium text-gray-700">
                                    photo</label>
                                <input type="file" name="last-name"  id="last-name" placeholder='prenom'
                                    autocomplete="family-name"
                                    className="mt-1 focus:ring-indigo-500 text-gray-300  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                            </div>


                       
                            <div className="md:flex md:items-center">
    <div className="md:w-1/3">
      <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
      Sauvgarder     
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
                </div>
                </div>
       </div>
    </form>
  </div>
  </div>
  
 </section>

    <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
            <div className=""></div>
        </div>
    </div>
    <div className="flex flex-wrap -mx-6 mt-4 ">
<div className="bg-white rounded md:w-1/3 w-1/2 border shadow-lg ml-16">
    <div className="rounded-t ">
      <div >
        <span className="font-semibold text-white md:text-base text-sm">Mot de passe</span>
        <div className="absolute right-0 top-0 -mr-2 -mt-2 border cursor-pointer shadow-lg  z-10 p-1 rounded-full ">
        
        </div>
      </div>
    </div>
    <div className="bg-gray-200 md:text-base text-sm border-b p-2 h-24">
        <p>Mot de passe</p>
      </div>
      <div className="p-2 flex justify-end rounded-b">
        <button className="focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 mr-2 bg-blue-700 hover:bg-blue-600 text-white rounded">Change</button>
        
      </div>
  </div>

  <div className=" rounded md:w-1/3 w-1/2 border shadow-lg ml-44">
    <div className="rounded-t ">
      <div className="relative py-3 px-2 flex">
        
        <div className="absolute right-0 top-0 -mr-2 -mt-2 border cursor-pointer shadow-lg bg-white z-10  rounded-full ">
        </div>
      </div>
    </div>
    <div className="bg-gray-200 md:text-base text-sm border-b p-2 h-24">
        <p>Supprimer le compte</p>
      </div>
      <div className="p-2 flex justify-end rounded-b">
      <button className="focus:outline-none py-1 px-2 md:py-2 md:px-3 w-24 bg-red-700 hover:bg-red-600 text-white rounded">Désactivie</button>
        
      </div>
  </div>
  </div>
  </div>
   

  )
}

export default profile