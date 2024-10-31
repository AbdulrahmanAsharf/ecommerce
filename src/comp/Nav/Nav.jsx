
import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './Nax.css';
import imglogo from '../../image/logo.webp'
import { MdOutlineLocalShipping } from "react-icons/md";
import {  CiLogin, CiLogout } from 'react-icons/ci';
import { FaRegCircleUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosCloseCircle } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';
function Nav({search, setSearch, searchproduct}) {
    const { loginWithRedirect  , logout ,  user, isAuthenticated} = useAuth0();
    const [ active , setActive ] = useState('navBar')
    const showNaN = () =>{
        setActive('navBar activeNavbar')
    }
    const removeNaN = () =>{
        setActive('navBar ')
    }
    return (
        <div className='header'>
            <div className='top_header'>
                <div className="icon">
                    <MdOutlineLocalShipping />
                </div>
                <div className="info">
                    <p>free shipping when shipping upto $1000</p>
                </div>
            </div>
            <div className="min_header">
                <div className="logo">
                    <img src={imglogo} alt="" />
                    
                </div>
                <div className="search">
                    <input type='text' value={search} placeholder='searh' onChange={(e) => setSearch(e.target.value)}></input>
                    <button onClick={searchproduct}><AiOutlineSearch /></button>
                </div>
                {
                    isAuthenticated ? 
                        <div className="log">
                            <CiLogout className='cil'/>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                LogOut
                            </button>
                        </div>
                    :
                        <div className="log">
                            <CiLogin className='cil'/>
                            <button onClick={() => loginWithRedirect()}>LogIn</button>
                        </div>
                }
            </div>
            <div className="bottom_header">
                <div className="user">
                    {
                        isAuthenticated ?
                        <>
                            <div className="icon">
                                <FaRegCircleUser />
                            </div>
                            <div className="info">
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                            </div>
                            
                            
                        </>
                        :
                        <>
                            <div className="icon">
                                <FaRegCircleUser />
                            </div>
                            <div className="info">
                                <p>please login</p>
                            </div>
                        </>
                    }
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem" >
                            <Link to='/' className='link'>Home</Link>
                        </li>
                        <li className="navItem" >
                            <Link to='/Shop' className='link'>Shop</Link>
                        </li>
                        <li className="navItem">
                            <Link to='/Cart' className='link'>Cart</Link>
                        </li>
                        <li className="navItem" >
                            <Link to='/About' className='link'>About</Link>
                        </li>
                        <li className="navItem">
                            <Link to='/Contact' className='link'>Contact</Link>
                        </li>
                    </ul>
                    <div className="closeNavbar" onClick={removeNaN}>
                        <IoIosCloseCircle className='icon' />
                    </div>
                </div>
                <div  className="toggleNavbar" onClick={showNaN}>
                    <TbGridDots className='icon' />
                </div>
                <div className='flat'>
                    <p>FLAT 10% OVER ALL IPHONE</p>
                </div>
            </div>
        </div>
    )
}

export default Nav
























































