import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './comp/Nav/Nav';
import Home from './comp/Home/Home';
import Footer from './comp/Footer/Footer';
import Shop from './comp/Shop/Shop';
import Cart from './comp/Cart/Cart'
import Products from './comp/Products';
import { useState } from 'react';
import Contact from './comp/Contact/Contact';
import toast, { Toaster } from 'react-hot-toast';
function App() {
  // Add To cart
  const [cart, setCart] = useState([])
  //Shop Page product
  const [shop, setShop] = useState(Products)
    //Shop Search Filter
  const [search, setSearch] = useState('')
  //Shop category filter
  const Filter = (x) =>{
    const catefilter = Products.filter((product) => {
      return product.cat === x 
  })
  setShop(catefilter)
  }
  const allcatefilter = () =>
  
  setShop(Products)
  
  //Shop Search Filter
  const searchlength = (search || []).length === 0
  const searchproduct = () =>{
    if(searchlength){
      alert("Please Search Something !")
      setShop(Products)
    }else{
      const searchfilter = Products.filter((x) => 
      {
        return x.cat === search
      })
      setShop(searchfilter)
  }
  }
  //Add To cart
  const addtocart = (product) =>{
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if(exist){
      toast.error("This product is alleardy added in cart")
    }else{
      setCart([...cart, {...product, qty:1}])
      toast.success('Added To Cart')
    }
  }
    console.log(cart)


    const decreaseQty = (product)=>{
      const productExit = cart.find((cart) => cart.id === product.id)
      console.log(productExit)
      if(productExit.qty === 1){
        setCart(cart.filter((cart) => cart.id !== product.id))
      }else{
        setCart(cart.map((cart) => (cart.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : cart)))
      }
    }
  return (
    <div className="App">
      <BrowserRouter>
      <Toaster />
        <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
        <Routes>
          <Route path="/" element={<Home addtocart={addtocart}/>}/>
          <Route path='Shop' element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
          <Route path='Cart' element={<Cart cart={cart} setCart ={setCart}  decreaseQty={decreaseQty}/> } />
          <Route path='Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
