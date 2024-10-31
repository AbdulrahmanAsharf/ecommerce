import React, { useState } from 'react'
import './shop.css'
import imgshop from '../../image/shop_top.webp';
import imgshop1 from '../../image/shop_left (1).avif'
import { FaHeart } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';
import { IoIosClose } from 'react-icons/io';
function Shop ({shop, Filter, allcatefilter, addtocart}) {
    const [showdetail , setshowdetail] = useState(false)
    const [detail , setDetail] = useState([])
    const detailpage = (curelm) =>{
        //console.log(detailpage)
        const detaildata =  ([{curelm}])
        //console.log(detaildata)
        const productdetail = detaildata[0]['curelm']
        //console.log(productdetail)
        setDetail(productdetail)
        setshowdetail(true)
    }
    const closedetail = ()=>{
        setshowdetail(false)
    }
    return (
    <>
    {
        showdetail ?
        <>
            <div className="product_detail">
                <button onClick={closedetail}><IoIosClose /></button>
                <div className="container">
                    <div className="img_box">
                        <img src={detail.img} alt="" />
                    </div>
                    <div className="info">
                        <h4>{detail.cat}</h4>
                        <h2>{detail.name}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga error necessitatibus, est blanditiis saepe deleniti eaque incidunt, tempore nulla ut provident velit magni obcaecati, quae mollitia commodi consectetur eos.</p>
                        <h3>${detail.price}</h3>
                        <button className='btn' onClick={()=> addtocart(detail)}>add to cart</button>
                    </div>
                </div>
            </div>
        </>
        : null

    }
        <div className="Shop">
            <h2># Shop</h2>
            <p>Home . Shop</p>
            <div className="container">
                <div className="left_box">
                    <div className="category">
                        <div className="header">
                            <h3>all categories</h3>
                        </div>
                        <div className="box">
                            <ul>
                                <li onClick={()=> allcatefilter()}># all</li>
                                <li onClick={()=> Filter ('tv')}># tv</li>
                                <li onClick={()=> Filter ('laptop')}># laptop</li>
                                <li onClick={()=> Filter ('speaker')}># speaker</li>
                                <li onClick={()=> Filter ('hour')}># hour</li>
                                <li onClick={()=> Filter ('headphone')}># headphone</li>
                                <li onClick={()=> Filter ('phone')}># phone</li>
                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="img_box">
                            <img src={imgshop1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right_box">
                    <div className="banner">
                        <div className="img_box">
                            <img src={imgshop} alt="" />
                        </div>
                    </div>
                    <div className="product_box">
                        <h2>shop product</h2>
                        <div className="product_container">
                            {
                                shop.map((product) =>
                                {
                                    return(
                                        <div className="box">
                                            <div className="img_box">
                                                <img src={product.img} alt="" />
                                                <div className="icon">
                                                    <li onClick={()=>detailpage(product)}><FaEye /></li>
                                                    <li><FaHeart /></li>
                                                </div>
                                            </div>
                                            <div className="banner">
                                                <h3>{product.name}</h3>
                                                <p>${product.price}</p>
                                                <button onClick={()=> addtocart(product)}>add to cart</button>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </div>
    </>
    )
}

export default Shop
