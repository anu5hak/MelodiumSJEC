import React from 'react'
import './DashboardMenu.css'
// import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Logo from '../../Images/MelodiumLogo.png'
import {Link, useNavigate} from 'react-router-dom';

function DashboardMenu() {
  const navigate = useNavigate();
  const handleLogout = () =>
  {
    navigate("/Dashboard/Login")
  }
  return (
    <>
        <div className="dashboard-menu">
          <div className="studio-image-text-cont">
                <img className="menu-logo" alt="Rectangle" src={Logo} />
                <span className="spanMel">Melodium</span>
          </div>
          <div className="dash-menu-line1"/>
          <div className='dashboard-menu-container'>
            <ul>
              <li> 
                  <div className="icon-text">
                    <Icon icon="ion:home-sharp" color="#f5bc25" />  Home
                  </div>
              </li>
              <li>
                  <Link to="/Dashboard/Analytics">
                    <div className="icon-text">
                    <Icon icon="carbon:analytics" color="#f5bc25" /> Analytics
                    </div>
                  </Link>
              </li>
              <li> <Link to="/Dashboard/Booking">
                      <div className="icon-text">
                        <Icon icon="ion:calendar" color="#f5bc25" /> Bookings
                      </div>
                    </Link>
              </li>
              <li>
                  <Link to="/Dashboard/Media">
                    <div className="icon-text"> 
                      <Icon icon="material-symbols:perm-media" color="#f5bc25" /> Media
                    </div>
                  </Link>
              </li>
              <li>  <Link to="/Dashboard/Reviews">
                    <div className="icon-text">
                      <Icon icon="carbon:review" color="#f5bc25" /> Reviews
                    </div>
                    </Link>
              </li>
            </ul>
          </div>
          <div className="dash-menu-line2"/>
          <div className='dashboard-menu-container2'>
            <ul>
              <li> 
                  <div className="icon-text">
                    <Icon icon="wpf:key-security" color="#f5bc25" /> Security
                  </div>
              </li>
              <li>
                  <div className="icon-text" onClick={handleLogout}> 
                    <Icon icon="icon-park-outline:logout" color="#f5bc25" /> Logout
                  </div>
              </li>
            </ul>
          </div>
              
        </div>
    </>
  )
}

export default DashboardMenu