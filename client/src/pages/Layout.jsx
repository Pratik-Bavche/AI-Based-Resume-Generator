import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import {useSelector} from 'react-redux'
import Loder from '../components/Loder';
import Login from './Login';


const Layout = () => {

  const {user,loading}=useSelector(state=>state.auth)


if(loading)
{
  return <Loder/>
}

  return (
    <div>
      {
        user ?(<div className='min-h-screen bg-gray-50'>
       <NavBar/> 
        <Outlet/>
      </div>): <Login/>
      }
      
    </div>
  );
}

export default Layout;
