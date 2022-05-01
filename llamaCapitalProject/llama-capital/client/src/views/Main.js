import React from 'react';
import { Link } from 'react-router-dom';
import group9 from '../Images/Group8.png'
import '../css/main.css'


function Main() {
   return (
      <div>
         <div class="container">
        <div class="top">
            <div class="clear-box">
                
                <div class="clear-box-items">
                    <div class="p">
                        <h1>Your easiest DeFi platform!</h1>
                        <p>Llama Capital will simplify your transition to decentralized finance. Trade and earn with our new tools!</p>
                        <Link to={'/user/new'}>Sign Up</Link><br />
                        <Link to={'/user/login'}>Login</Link>
                    </div>
                    <div class="llogo">
                        <img id="llogo" src={group9}></img>
                    </div>
                </div>
                
            </div>
            <div class="add">
                <h3>Crypto Trading, Minting & Pooling</h3>
                <div class="vert"></div>
                <h3>NFT Trading, Minting & Pooling</h3>
                <div class="vert"></div>
                <h3>Play Games and earn</h3>
                <div class="vert"></div>
                <h3>Learn and Earn</h3>
            </div>
        </div>
        <div class="middle">
            <div class="trade">

            </div>
            <div class="icons">
                <h2>Trade Crypto Currency with Llama Capital</h2>
                <p>Llama Capital provides a variety of currecies to trade from!</p>
                <Link to={'/trade'}>Trade Now</Link>
            </div>
            <div class="icons">
                <h2>Trade Crypto Currency with Llama Capital</h2>
                <p>Llama Capital provides a variety of currecies to trade from!</p>
                <Link to={'/trade'}>Trade Now</Link>
            </div>
        </div>
        <div class="footer"></div>
      </div>
         
         
      </div>
   )
}

export default Main