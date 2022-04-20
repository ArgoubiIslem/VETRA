import React from 'react'

function Info() {
  return (
    <div>
      <div className="text-black-400 m-auto flex max-w-6xl flex-col border-t border-gray-500 px-3 pb-5 pt-5 text-sm md:flex-row"></div>
      <div className="m-auto my-10 flex max-w-6xl flex-col md:flex-row">
        <div className="mx-2 flex items-center justify-center rounded bg-[#ffffff] p-4 md:w-1/3">
          <div className="h-16 w-16 p-2">
            <a className="block h-16 w-16 ">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://cdn.w600.comps.canstockphoto.fr/livraison-logo-informatique-illustration_csp63587720.jpg"
              />
            </a>
          </div>
          <div className=" ml-5">
            <div className="text-xl  leading-8">Livraison</div>
            <div>a domicile</div>
          </div>
        </div>
        <div className="mx-2 flex items-center justify-center rounded bg-[#ffffff]">
          <div className="h-16 w-16 p-2"></div>
          <div className="ml-5">
            <div className="text-xl  leading-8"></div>
            <div></div>
          </div>
        </div>
        <div className="mx-2 flex items-center justify-center rounded bg-[#ffffff] p-4 md:w-1/3">
          <div className="w-18 h-16 p-2">
            <a className="block h-16 w-16">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://www.alioze.com/wp-content/uploads/2017/12/retour-remboursement-e-commerce.jpg"
              />
            </a>
          </div>
          <div className="ml-5">
            <div className="text-xl  leading-8">Politique retours</div>
          </div>
        </div>
        <div className="mx-2 flex items-center justify-center rounded bg-[#ffffff] p-4 md:w-1/3">
          <div className="h-16 w-16 p-2"></div>
          <div className="ml-5">
            <div className="text-xl  leading-8"></div>
            <div></div>
          </div>
        </div>
        <div className="mx-2 flex items-center justify-center rounded bg-[#ffffff] p-4 md:w-1/3">
          <div className="h-16 w-16 p-2">
            <a className="block h-16 w-16">
              <img
                className="h-full w-full rounded-full object-cover object-center"
                src="https://mon-guide-bancaire.com/wp-content/uploads/2020/04/meilleure-carte-bancaire-pour-voyager8.png"
              />
            </a>
          </div>
          <div className="ml-5">
            <div className="text-xl  leading-8">Paiement</div>
            <div>Sécurisé</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
