import React from 'react'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { ProductCard } from './components/productCard/ProductCard'
import { Sidebar } from './components/sidebar/Sidebar'
import { data } from './data'

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Sidebar />
        {/* <ProductList data={data} /> */}
        <ProductCard data={data} />
      </main>
      <Footer />
    </div>
  )
}
