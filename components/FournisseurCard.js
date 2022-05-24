import React, { useEffect, useState } from 'react'
import { Confirm, Loader } from 'semantic-ui-react'

function FournisseurCard({ fournisseur, setUpdateFournisseur }) {
  const [confirm, setConfirm] = useState(false)
  const [showConf, setShowConf] = useState(false)

  const open = () => setConfirm(true)
  const [isDeleting, setIsDeleting] = useState(false)

  const close = () => setConfirm(false)
  const deleteFournisseur = async () => {
    // const id = router.query.id
    try {
      await fetch(
        `http://localhost:3000/api/fournisseurs/${fournisseur?._id}`,
        {
          method: 'Delete',
        }
      )
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
      deleteFournisseur()
    }
  }, [isDeleting])

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      {isDeleting ? (
        <Loader active />
      ) : (
        <>
          <td className="whitespace-nowrap py-3 px-6 text-left">
            <div className="flex items-center">
              <div className="mr-2"></div>
              <span className="font-medium">#</span>
            </div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">
              <div className="mr-2">
                <img className="h-6 w-6 rounded-full" src={fournisseur.image} />
              </div>
              <span>
                {fournisseur.nom} {fournisseur.Prenom}
              </span>
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex items-center justify-center">
              {fournisseur.email}
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="item-center flex justify-center">
              <span className="rounded-full bg-green-200 py-1 px-3 text-xs text-green-600">
                {fournisseur.tel}
              </span>
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="item-center flex justify-center">
              {fournisseur.adresse}
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="item-center flex justify-center">
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
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>

              <button
                onClick={() =>
                  !updateFournisseur
                    ? setUpdateFournisseur(true) ||
                      setFournisseurId(fournisseur)
                    : setUpdateFournisseur(false)
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
        <div className="fixed top-0 bottom-0 left-0 right-0 mx-auto h-full w-full items-center justify-center bg-gray-600 bg-opacity-70 ">
          <div className="mx-auto grid max-w-4xl items-center gap-10 bg-white py-16 px-8">
            <p>Do you want to delete ?</p>
            <div className="flex justify-between">
              <button
                onClick={deleteFournisseur}
                className="bg-blue-600 bg-opacity-70 px-6 py-2 text-white "
              >
                Confirm
              </button>
              <button
                onClick={() => setShowConf(false)}
                className="bg-blue-600 bg-opacity-70 px-6 py-2 text-white "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </tr>
  )
}

export default FournisseurCard
