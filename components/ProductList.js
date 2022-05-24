import React, { useState } from 'react'
import { Confirm, Loader } from 'semantic-ui-react'
import PromoComp from './PromoComp'

function ProductList({ product, setIsSubmitting }) {
  const [showPromo, setShowPromo] = useState(false)

  const [updateProduct, setUpdateProduct] = useState(false)
  const [productId, setProductId] = useState()
  const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [promosData, setPromosData] = useState(null)
  // const [isSubmitting, setIsSubmitting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    close()
  }

  return (
    <div className="mt-10 w-full">
      <div className=" mx-auto  w-full max-w-sm grid-cols-4 gap-10 ">
        <div className="">
          {isDeleting ? (
            <Loader active />
          ) : (
            <>
              <div className="min-h-80  aspect-w-1 aspect-h-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <img
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                  src={product.image}
                  alt=""
                />
              </div>
              <div className="px-5 py-3">
                <span className="mt-2 text-gray-500">{product.nom}</span>
                <button
                  onClick={() =>
                    !showPromo
                      ? setShowPromo(true) || setPromosData(product)
                      : setShowPromo(false) || setPromosData()
                  }
                  className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                  type="button"
                >
                  Promo
                </button>
                {showPromo ? <PromoComp product={product} /> : null}
                <br></br>
                <span className="mt-2 text-gray-500">{product.prix} DT</span>
                <br></br>

                <button
                  onClick={() =>
                    !updateProduct
                      ? setUpdateProduct(true) || setProductId(product)
                      : setUpdateProduct(false)
                  }
                  className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white shadow hover:bg-blue-500 focus:outline-none"
                  type="button"
                >
                  Edit
                </button>

                <button
                  className="focus:shadow-outline ml-8 rounded bg-red-500 py-2 px-4 font-bold text-white shadow hover:bg-red-500 focus:outline-none"
                  type="button"
                  onClick={open}
                >
                  Supprimer
                </button>
              </div>
            </>
          )}
          <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
        </div>
      </div>
    </div>
  )
}

export default ProductList
