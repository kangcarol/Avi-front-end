// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

import BirdList from './pages/BirdList/BirdList'
import BirdDetails from './pages/BirdDetails/BirdDetails'
import BirdNew from './pages/BirdNew/BirdNew'
import BirdEdit from './pages/BirdEdit/BirdEdit'

import EventList from './pages/EventList/EventList'
import EventDetails from './pages/EventDetails/EventDetails'
import EventNew from './pages/EventNew/EventNew'
import EventEdit from './pages/EventEdit/EventEdit'

import AdviceList from './pages/AdviceList/AdviceList'
import AdviceDetails from './pages/AdviceDetails/AdviceDetails'
import AdviceNew from './pages/AdviceNew/AdviceNew'
import AdviceEdit from './pages/AdviceEdit/AdviceEdit'

import AdviceList from './pages/SupplyList/SupplyList'
import AdviceDetails from './pages/SupplyDetails/SupplyDetails'
import AdviceNew from './pages/SupplyNew/SupplyNew'
import AdviceEdit from './pages/SupplyEdit/SupplyEdit'

import Profiles from './pages/Profiles/Profiles'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import ProfileEdit from './pages/ProfileEdit/ProfileEdit'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as birdService from './services/birdService'
import * as eventService from './services/eventService'
import * as adviceService from './services/adviceService'
import * as supplyService from './services/supplyService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const [birds, setBirds] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }


  const handleAddBird = async (birdData) => {
    // birdData will have a shape of:
    //   {
    //     "name": "string",
    //     "descripton": "string",
    //     etc etc...
    //   }
    const newBird = await birdService.create(birdData)
    setBirds([newBird, ...birds])
    navigate('/birds')
  }

  // const handleAddToWishlist = async (birdData) => {
  //   const addToWishlist = await birdService.___(birdData)
  //   setWishlist([])

  // }


  const handleUpdateBird = async (birdData) => {
    // birdData._id will be 634daa34dc0dfecfbb5767de
    const updatedBird = await birdService.update(birdData)
    const updatedBirdsData = birds.map(bird => {
      return birdData._id === bird._id ? updatedBird : bird
    })
    setBirds(updatedBirdsData)
    navigate('/birds')
  }

  const handleDeleteBird = async (id) => {
    const deletedBird = await birdService.deleteBird(id)
    setBirds(birds.filter(b => b._id !== deletedBird._id))
    navigate('/birds')
  }

  useEffect(() => {
    console.log("The useEffect is running");
    const fetchAllBirds = async () => {
      console.log('The Fetch All Birds function is running')
      const data = await birdService.index()
      setBirds(data)
    }
    if (user) fetchAllBirds()
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/birds"
          element={
            <ProtectedRoute user={user}>
              <BirdList birds={birds}
              // addToWishlist={addToWishlist}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/birds/:id"
          element={
            <ProtectedRoute user={user}>
              <BirdDetails user={user} 
              handleDeleteBird={handleDeleteBird}/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/birds/new"
          element={
            <ProtectedRoute user={user}>
              <BirdNew handleAddBird={handleAddBird} />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/birds/:id/edit" 
          element={
          <ProtectedRoute user={user}>
            <BirdEdit handleUpdateBird={handleUpdateBird} />
          </ProtectedRoute>
        } />

      </Routes>
    </>
  )
}

export default App
