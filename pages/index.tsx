import Head from 'next/head'
import Carousels from '../components/Carousels'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Media from '../components/Media'
import Headers from '../components/Headers'
import Blogs from '../components/Blogs'
import Promo from '../components/Promo'
import NewsLettre from '../components/NewsLettre'
import MeilleuresVentes from '../components/MeilleuresVentes'
import ShopCategorie from '../components/ShopCategorie'
import ChatBox from '../components/ChatBox'

export default function Home() {

  return(
    <div>
    <Head>
      
      <title>E-commerce</title>
      <link rel="icon" href="/favicon.icon" />
      
    </Head>
   
    <div><Headers /></div>
    <div><Carousels /></div>
    <Blogs />
    
    
    <div className="flex justify-center"><ShopCategorie /></div>
    <div className="flex justify-center"><Promo /></div>
    <div className="flex justify-center"><  MeilleuresVentes /></div>
    <div className="flex justify-center"> <Info /> </div>
    <div className="flex justify-center"> <NewsLettre /> </div>
   <div className="flex justify-center"> <Media /> </div>
 
   <div className="flex justify-center"> <ChatBox /> </div>
    <Footer />
    
    </div>

  )
} 