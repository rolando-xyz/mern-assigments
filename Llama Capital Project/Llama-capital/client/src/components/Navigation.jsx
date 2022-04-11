import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import './Navigation.css';
import './NavigationScript'
import './MenuScript'
import group8 from '../Images/Group 8.png'

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
      <Outlet />
    </div>
  )
}

export default Navigation