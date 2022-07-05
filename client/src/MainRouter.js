import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>

        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />

        <Route path="/user/:userId" element={<Profile/>}/>
      </Routes>
    </div>)
}

export default MainRouter