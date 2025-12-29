import React, { useState } from 'react'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import data from "./index";
import ProductDetails from './components/ProductDetails';
import Checkout from "./components/Checkout";
import Wishlist from './components/Wishlist';

const App = () => {
  

  
 

  const [products,setProducts] = useState(data);
  const [searchData,setSearchData] = useState("");
  const [categorySelect,setCategorySelect] = useState("All Products");
  const [currentPageState,setPageCurrentState] = useState({state:"Home",idx:""});
  const [totalCost,setTotalCost] = useState(0)
  
 
  function openCompo(id){
   
    setPageCurrentState((prev)=>({...prev,state:"other",idx:id}))
  }

  

  let showState ;
  if(currentPageState.state === "Home"){
    
    showState = <Hero   products={products} setProducts={setProducts} searchData={searchData} categorySelect={categorySelect} openCompo={openCompo}/>
  }
  else if(currentPageState.state ==="wishlist"){
  
    showState = <Wishlist openCompo={openCompo} products={products}/>
  }
  else if(currentPageState.state === "cart"){
    
     showState = <Checkout totalCost={totalCost}/>
  }
  else if(currentPageState.state==="other") {
     
    showState =   <ProductDetails  currentPageState={currentPageState} setPageCurrentState={setPageCurrentState} products={products} totalCostCalculate={totalCostCalculate}/>
  }
  

  function totalCostCalculate(totalCost){
     
    console.log(typeof(totalCost))
    setTotalCost(totalCost)

  }




  return (
    <div className='app w-full min-h-screen'>
        <Nav setSearchData={setSearchData} searchData={searchData}   setPageCurrentState = {setPageCurrentState}/>
        <Sidebar products={products}  setCategorySelect={setCategorySelect} setPageCurrentState={setPageCurrentState}/>



        <div className='main'>
          
          {showState}

        </div>

    </div>
  )
}

export default App