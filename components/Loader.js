import React from 'react'
import loader from '../public/loader.gif'
import Image from 'next/image'
const Loader = () => {
  return (
    <div className="flex content-center justify-center">
      <Image src={loader} height={24} width={24} />
    </div>
  )
}

export default Loader
