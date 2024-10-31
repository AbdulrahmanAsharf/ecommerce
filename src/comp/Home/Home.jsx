import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Products from '../Products'
import { FaCartArrowDown, FaEye, FaFacebook, FaHeart, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
import imgour from '../../image/T1.avif'
import imgmore1 from '../../image/Multi-Banner-1.avif'
import imgmore2 from '../../image/Multi-banner-2.avif'
import imgmore3 from '../../image/Multi-Banner-3.webp'
import imgmore4 from '../../image/Multi-banner-4.avif'
import imgmore5 from '../../image/Multi-Banner-5.webp'
function Home({addtocart}) {
    const [newproduct , setNewproduct] = useState([])
    const [fasruredproduct , setFasruredproduct] = useState([])
    const [topproduct , setTopproduct] = useState([])
    const [trandingProduct , setProduct] = useState(Products)
    const filtercart = (x) =>{
        const filterproducts = Products.filter((Product) =>{
            return Product.type === x
        })
        setProduct(filterproducts)
    }
    const allProduct = ()=>{
        setProduct(Products)
    }
    useEffect(()=>{
        Productcat()
    })
    const Productcat = ()=>{
        
        const newcatgory = Products.filter((x)=>{
            return x.type === 'new'
        })
        setNewproduct(newcatgory)

        const fasruredcatgory = Products.filter((x)=>{
            return x.type === 'fasrured'
        })
        setFasruredproduct(fasruredcatgory)

        const topcatgory = Products.filter((x)=>{
            return x.type === 'top'
        })
        setTopproduct(topcatgory)
    }
    return (
    <>
        <div className="Home">
            <div className="top_banner">
                <div className="contant">
                    <h3>silver Aluminum</h3>
                    <h2>Apple watch</h2>
                    <p>30% off at your first odder</p>
                    <Link to='/Shop' className='Link'>Shop Now</Link>
                </div>
            </div>
            <div className="trending">
                <div className="container">
                    <div className="left_box">
                        <div className="header">
                            <div className="heading">
                                <h2 onClick={() => allProduct()}>Trending product</h2>
                            </div>
                            <div className="cate">
                                <h3 onClick={() => filtercart ('new')}>New</h3>
                                <h3 onClick={() => filtercart ('fasrured')}>fastured</h3>
                                <h3 onClick={() => filtercart ('top')}>top selling</h3>
                            </div>
                        </div>
                        <div className="products">
                            <div className="container">
                                {
                                    trandingProduct.map((Product)=>{
                                        return(
                                            <>
                                                <div className="box">
                                                    <div className="img_box">
                                                        <img src={Product.img} alt="" />
                                                        <div className="icon">
                                                            <div className="icon_box">
                                                                <FaEye />
                                                            </div>
                                                            <div className='icon_box'>
                                                                <FaHeart />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="info">
                                                        <h3>{Product.name}</h3>
                                                        <p>$ {Product.price}</p>
                                                        <button onClick={()=>addtocart(Product)}>Add to cart</button>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button className='more'>Show more</button>
                    </div>
                    <div className="right_box">
                        <div className="right_container">
                            <div className="test">
                                <div className="head">
                                    <h3>our testmonial</h3>
                                </div>
                                <div className="detail">
                                    <div className="img_box">
                                        <img src={imgour} alt="" />
                                    </div>
                                    <div className="info">
                                        <h3>stephan</h3>
                                        <h4>web designer</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod id doloribus dolor error cumque non aliquid, ab eveniet tempore voluptatem harum dolorem expedita quidem iusto possimus iure officiis odio? Est!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="newletter">
                                <div className="head">
                                    <h3>newletter</h3>
                                </div>
                                <div className="from">
                                    <p>join our malling list</p>
                                    <input type="email"  placeholder='E-mail' autoComplete='off' />
                                    <button>sudscide</button>
                                    <div className="icon_box">
                                        <div className="icon">
                                            <FaFacebook />
                                        </div>
                                        <div className="icon">
                                            <FaTwitter />
                                        </div>
                                        <div className="icon">
                                            <FaInstagram />
                                        </div>
                                        <div className="icon">
                                            <FaYoutube />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="banners">
                <div className="container">
                    <div className="left_box">
                        <div className="box">
                            <img src={imgmore1} alt="" />
                        </div>
                        <div className="box">
                            <img src={imgmore2} alt="" />
                        </div>
                    </div>
                    <div className="right_box">
                        <div className="top">
                                <img src={imgmore3} alt=''/>
                                <img src={imgmore4} className="none" alt="" />
                        </div>
                        <div className="bottom">
                            <img src={imgmore5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="product_type">
                <div className="container">
                    <div className="box">
                        <div className="header">
                            <h2>New Product</h2>
                        </div>
                        {
                            newproduct.map((Products) =>{
                                return(
                                    <>
                                        <div className="productbox">
                                            <div className="img_box">
                                                <img src={Products.img} alt="" />
                                            </div>
                                            <div className="derail">
                                                <h3>{Products.name}</h3>
                                                <p>${Products.price}</p>
                                                <div className="icon">
                                                    <button><FaEye /></button>
                                                    <button><FaHeart /></button>
                                                    <button onClick={()=>addtocart(Products)} ><FaCartArrowDown /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="box">
                        <div className="header">
                            <h2>fasrured Product</h2>
                        </div>
                        {
                            fasruredproduct.map((Products) =>{
                                return(
                                    <>
                                        <div className="productbox">
                                            <div className="img_box">
                                                <img src={Products.img} alt="" />
                                            </div>
                                            <div className="derail">
                                                <h3>{Products.name}</h3>
                                                <p>${Products.price}</p>
                                                <div className="icon">
                                                    <button><FaEye /></button>
                                                    <button><FaHeart /></button>
                                                    <button onClick={()=>addtocart(Products)}><FaCartArrowDown /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="box">
                        <div className="header">
                            <h2>Top Product</h2>
                        </div>
                        {
                            topproduct.map((Products) =>{
                                return(
                                    <>
                                        <div className="productbox">
                                            <div className="img_box">
                                                <img src={Products.img} alt="" />
                                            </div>
                                            <div className="derail">
                                                <h3>{Products.name}</h3>
                                                <p>${Products.price}</p>
                                                <div className="icon">
                                                    <button><FaEye /></button>
                                                    <button><FaHeart /></button>
                                                    <button onClick={()=>addtocart(Products)} ><FaCartArrowDown /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home
