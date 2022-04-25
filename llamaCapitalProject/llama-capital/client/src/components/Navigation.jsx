import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './Navigation.css';
import './NavigationScript'
import './MenuScript'
import group8 from '../Images/Group 8.png'
import group9 from '../Images/Group8.png'

const Navigation = () => {
  return (
    <div>
      <div>
        <div class="nav">
          <div id="myMenu" class="dropdown">
              <a href="javascript: void(0)" class="buttonX"
              onclick="closeMenu()">&times;</a>
            <div class="dropdown-items">
              <a href="/logout" class="menu-item">My Account</a>
              <a href="/logout" class="menu-item">Trade</a>
              <a href="/logout" class="menu-item">Farm</a>
              <a href="/logout" class="menu-item">Stake</a>
              <a href="/logout" class="menu-item">NTF's</a>
              <a href="/logout" class="menu-item">Support</a>
              <a href="/logout" class="menu-item">Blog</a>
            </div>
          </div>
          <span class="hamburger text-white" onclick="openMenu()">&#9776;</span>
          <div>
            <img src={group8} alt='llogo'/>
          </div>
          <div class="d-flex text-center justify-content-between align-items-center">
          </div>
        </div>
        
      </div>
      <div class="container">
        <div class="top">
            <div class="clear-box">
                
                <div class="clear-box-items">
                    <div class="p">
                        <h1>Your easiest DeFi platform!</h1>
                        <p>Llama Capital will simplify your transition to decentralized finance. Trade and earn with our new tools!</p>
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
                <Link to={'/user'}>Trade Now</Link>
            </div>
        </div>
        <div class="footer"></div>
      </div>
      <Outlet />
      
    </div>
    
  )
}

export default Navigation