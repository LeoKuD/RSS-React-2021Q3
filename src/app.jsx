import React from 'react'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { ProductList } from './components/productList/ProductList'
import { Sidebar } from './components/sidebar/Sidebar'
import { data } from './data'

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Sidebar />
        <section className="content">
          <ProductList data={data} />
        </section>
      </main>
      <Footer />
    </div>
  )
}
