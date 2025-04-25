// import { useState } from 'react'
// import fetchData from './api doc'
import CharacterList from './characterList'

import './App.css'

function App() {
 


  return (
    <>
    <div className="all-item">
      <div className="banner-list">
        <div className="sale-list">Распродажа</div>
        <div className="item-list">Товары</div>
        <div className="buy-list">Корзина</div>
      </div>
      <div style={{padding: '20px'}} className="show-item products">
       
        <CharacterList/>
        </div>
      
     
    </div>
    
    
    
    </>



  )
}

export default App
