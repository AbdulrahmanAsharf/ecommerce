import React from 'react'
import './footer.css'
import { LuPiggyBank } from 'react-icons/lu'
import { FaHeadphonesSimple } from 'react-icons/fa6'
import { MdLocalShipping } from 'react-icons/md'
import { BsWalletFill } from 'react-icons/bs'
import imglogo from '../../image/logo.webp'
function Footer() {
    return (
    <>
        <div className="footer">
            <div className="container">
                <div className="left_box">
                    <div className="box">
                        <div className="icon">
                            <LuPiggyBank />
                        </div>
                        <div className="detail">
                            <h3>great saving</h3>
                            <p>Lorem ipsum dolor sit,</p>
                        </div>
                    </div> 
                    <div className="box">
                        <div className="icon">
                            <MdLocalShipping />
                        </div>
                        <div className="detail">
                            <h3>great saving</h3>
                            <p>Lorem ipsum dolor sit,</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FaHeadphonesSimple />
                        </div>
                        <div className="detail">
                            <h3>great saving</h3>
                            <p>Lorem ipsum dolor sit,</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <BsWalletFill />
                        </div>
                        <div className="detail">
                            <h3>great saving</h3>
                            <p>Lorem ipsum dolor sit,</p>
                        </div>
                    </div>
                </div>
                <div className="right_box">
                    <div className="header">
                        <img src={imglogo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in dolorum,</p>
                    </div>
                    <div className="bottom">
                        <div className="box">
                            <h3>your accout</h3>
                            <ul>
                                <li>about us</li>
                                <li>accout</li>
                                <li>payment</li>
                                <li>sales</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>your accout</h3>
                            <ul>
                                <li>about us</li>
                                <li>accout</li>
                                <li>payment</li>
                                <li>sales</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>your accout</h3>
                            <ul>
                                <li>about us</li>
                                <li>accout</li>
                                <li>payment</li>
                                <li>sales</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer
