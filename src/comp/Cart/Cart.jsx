import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
function Cart({cart , setCart ,decreaseQty  }) {
    const incqty = (curelm) =>{
        const exist = cart.find((x)=>{
            return x.id === curelm.id
        })
        setCart(cart.map((product) =>{
            return product.id === curelm.id ? {...exist, qty: exist.qty + 1} :product
        }))
    }
    const decqty = (curelm) =>{
        const exist = cart.find((x)=>{
            return x.id === curelm.id
        })
        setCart(cart.map((product) =>{
            return product.id === curelm.id ? {...exist, qty: exist.qty - 1} :product
        }))
    }
    const removeproduct =(curelm) =>{
        const exist = cart.find((x) =>{
            return x.id === curelm.id
        })
        if(exist.qty > 0){
            setCart(cart.filter((product)=>{
                return product.id !== curelm.id
            }))
        }
    }
    const total = cart.reduce((price , item) => price + item.qty * item.price , 0)
    return (
    <>
        <div className="cart">
            <h3>#cart</h3>
            {
                cart.length === 0 &&
                <>
                    <div className="empty_cart">
                        <h2>your shopping cart is empty</h2>
                        <Link to='/Shop'><button>shop naw</button></Link>
                    </div>
                </>
            }
            <div className="container">
                {
                    cart.map((product)=>{
                        return(
                            <>
                                <div className="box">
                                    <div className="img_box">
                                        <img src={product.img} alt="" />
                                    </div>
                                    <div className="detail">
                                        <div className="info">
                                            <h4>{product.cat}</h4>
                                            <h3>{product.name}</h3>
                                            <p>Price: ${product.price}</p>
                                            <p>Total: ${product.price * product.qty}</p>
                                        </div>
                                        <div className="quantity">
                                            <button onClick={()=> incqty(product)}>+</button>
                                            <input type="number" value={product.qty}/>
                                            <button onClick={() =>decreaseQty(product)}>-</button>
                                        </div>
                                        <div className="icon">
                                            <li onClick={() => removeproduct(product)}><IoClose /></li>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className="bottom">
                {
                    cart.length > 0 && 
                    <>
                        <div className="Tatal">
                            <h4>sub Total : ${total}</h4>
                        </div>
                        <button>checkout</button>
                    </>
                }
            </div>
        </div>
    </>
    )
}

export default Cart
