import React, { useEffect, useState } from 'react'
import { Confirm, Loader } from 'semantic-ui-react'
import EditPromo from '/pages/[id]/EditPromo'
function PromoCard({ promo }) {
  let prix = 0
  const [confirm, setConfirm] = useState(false)
  const [updatePromo, setUpdatePromo] = useState(false)
  const [showConf, setShowConf] = useState(false)
  const [updatePromos, setUpdatePromos] = useState(false)
  const open = () => setConfirm(true)
  const [isDeleting, setIsDeleting] = useState(false)
  const [promoId, setPromoId] = useState()
  const close = () => setConfirm(false)
  const deletePromo = async () => {
    // const id = router.query.id
    try {
      await fetch(`http://localhost:3000/api/Promos/${promo?._id}`, {
        method: 'Delete',
      })
      window.location.reload(true)
      // router.push("/");
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    close()
  }

  useEffect(() => {
    if (isDeleting) {
      deletePromo()
    }
  }, [isDeleting])

  return (
    <>
      {updatePromo ? (
        <EditPromo promo={promoId} />
      ) : (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          {isDeleting ? (
            <Loader active />
          ) : (
            <>
              <td className="whitespace-nowrap py-3 px-6 text-left">
                <div className="flex items-center">
                  <div className="mr-2"></div>
                  <span className="font-medium">{promo.nom}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <div className="mr-2"></div>
                  <span>{promo.prix} DT</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <div className="mr-2"></div>
                  <span>{(prix = (promo.remise * promo.prix) / 100)} DT</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <div className="mr-2"></div>
                  <span>{promo.dateDebut}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                  {promo.dateFin}
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="item-center flex justify-center">
                  <span className="rounded-full bg-green-200 py-1 px-3 text-xs text-green-600">
                    {promo.remise}
                  </span>
                </div>
              </td>

              <td className="py-3 px-6 text-center">
                <div className="item-center flex justify-center">
                  <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500"></div>

                  <button
                    onClick={() =>
                      !updatePromos
                        ? setUpdatePromo(true) || setPromoId(promo)
                        : setUpdatePromo(false)
                    }
                  >
                    <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                  </button>

                  <button onClick={() => setShowConf(true)}>
                    <div className="mr-2 w-4 transform hover:scale-110 hover:text-purple-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              </td>
            </>
          )}
          {showConf ? (
            <div class="fixed left-0 bottom-0 flex h-full w-full items-center justify-center bg-gray-100">
              <div class="w-1/2 rounded-lg bg-white">
                <div class="flex flex-col items-start p-4">
                  <div class="flex w-full items-center">
                    <div></div>

                    <svg
                      onClick={() => setShowConf(false)}
                      class="ml-auto h-6 w-6 cursor-pointer fill-current text-gray-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 18 18"
                    >
                      <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                    </svg>
                  </div>
                  <hr />
                  <div class="">Voulez vous supprimer ?</div>
                  <hr />
                  <div class="ml-auto">
                    <button
                      onClick={deletePromo}
                      class="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
                    >
                      Confirmer
                    </button>
                    <button
                      onClick={() => setShowConf(false)}
                      class="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-gray-500 hover:text-white"
                    >
                      Annuler
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </tr>
      )}
    </>
  )
}

export default PromoCard
