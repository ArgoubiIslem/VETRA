import React, { useState } from 'react'
import Promos from '../components/Promos'
import Evenement from '../components/Evenement'
import Container from '../components/Container'
import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Orders from '../components/Orders'
import Produits from '../components/Produits'
import Sidebar from '../components/Sidebar'
import Fournisseurs from '../components/Fournisseurs'
import Users from '../components/Users'

function DashboardLayout() {
  // console.log(dashboard)
  // console.log(produits)
  const [showDashboard, setShowDashboard] = useState(false)
  const [showProduits, setShowProduits] = useState(false)
  const [showOrders, setShowOrders] = useState(false)
  const [showFournisseurs, setShowFournisseurs] = useState(false)
  const [showPromos, setShowPromos] = useState(false)
  const [showEvenement, setShowEvenement] = useState(false)
  const [showUsers, setShowUsers] = useState(false)
  return (
    <div className="font-roboto flex h-screen bg-gray-200">
      <Sidebar
        dash={setShowDashboard}
        prod={setShowProduits}
        order={setShowOrders}
        four={setShowFournisseurs}
        pro={setShowPromos}
        event={setShowEvenement}
        user={setShowUsers}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-200">
          <Container page={<Dashboard />} isOpen={true} />

          {/* put Components here */}
          {showDashboard ? <Dashboard /> : null}
          {showProduits ? <Produits /> : null}
          {showOrders ? <Orders /> : null}
          {showFournisseurs ? <Fournisseurs /> : null}
          {showPromos ? <Promos /> : null}
          {showEvenement ? <Evenement /> : null}
          {showUsers ? <Users /> : null}

          {/* <div className="container mx-auto px-6 py-8">
          
          <slot />
        </div> */}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
