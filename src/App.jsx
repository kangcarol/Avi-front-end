// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

import ProfileDetails from './pages/ProfileDetails/ProfileDetails'
import ProfileEdit from './pages/ProfileEdit/ProfileEdit'

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

import SupplyList from './pages/SupplyList/SupplyList'
import SupplyListDetails from './pages/SupplyListDetails/SupplyListDetails'
import SupplyListNew from './pages/SupplyListNew/SupplyListNew'
import SupplyListEdit from './pages/SupplyListEdit/SupplyListEdit'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as birdService from './services/birdService'
import * as eventService from './services/eventService'
import * as adviceService from './services/adviceService'
import * as supplyListService from './services/supplyListService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const [birds, setBirds] = useState([])
  const [events, setEvents] = useState([])
  const [supplyLists, setSupplyLists] = useState([])
  const [advice, setAdvice] = useState([])

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

  // const handleAddToWishlist = async (wishListData??????) => {
  // }


  const handleUpdateBird = async (birdData) => {
    // birdData._id will be 634daa34dc0dfecfbb5767de, as example
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

  const handleAddEvent = async (eventData) => {
    const newEvent = await eventService.create(eventData)
    setEvents([newEvent, ...events])
    navigate('/events')
  }

  const handleUpdateEvent = async (eventData) => {
    const updatedEvent = await eventService.update(eventData)
    const updatedEventsData = events.map(event => {
      return eventData._id === event._id ? updatedEvent : event
    })
    setEvents(updatedEventsData)
    navigate('/events')
  }

  const handleDeleteEvent = async (id) => {
    const deletedEvent = await eventService.deleteEvent(id)
    setEvents(events.filter(b => b._id !== deletedEvent._id))
    navigate('/events')
  }

  useEffect(() => {
    console.log("The useEffect is running");
    const fetchAllEvents = async () => {
      console.log('The Fetch All function is running')
      const data = await eventService.index()
      setEvents(data)
    }
    if (user) fetchAllEvents()
  }, [user])
  
  const handleAddSupplyList = async (supplyListData) => {
    const newSupplyList = await supplyListService.create(supplyListData)
    setSupplyLists([newSupplyList, ...supplyLists])
    navigate('/supplylists')
  }
  
  const handleUpdateSupplyList = async (supplyListData) => {
    const updatedSupplyList = await supplyListService.update(supplyListData)
    const updatedSupplyListsData = supplyLists.map(supplyList => {
      return supplyListData._id === supplyList._id ? updatedSupplyList : supplyList
    })
    setSupplyLists(updatedSupplyListsData)
    navigate('/supplylists')
  }
  
  const handleDeleteSupplyList = async (id) => {
    const deletedSupplyList = await supplyListService.deleteSupplyList(id)
    setSupplyLists(supplyLists.filter(b => b._id !== deletedSupplyList._id))
    navigate('/supplylists')
  }
  
  useEffect(() => {
    console.log("The useEffect is running");
    const fetchAllSupplyLists = async () => {
      console.log('The Fetch All function is running')
      const data = await supplyListService.index()
      setSupplyLists(data)
    }
    if (user) fetchAllSupplyLists()
  }, [user])
  
    const handleAddAdvice = async (adviceData) => {
      const newAdvice = await adviceService.create(adviceData)
      setAdvice([newAdvice, ...advice])
      navigate('/advice')
    }
  
    const handleUpdateAdvice = async (adviceData) => {
      const updatedAdvice = await adviceService.update(adviceData)
      const updatedAdviceData = advice.map(adviceEach => {
        return adviceData._id === adviceEach._id ? updatedAdvice : adviceEach
      })
      setAdvice(updatedAdviceData)
      navigate('/advice')
    }
  
    const handleDeleteAdvice = async (id) => {
      const deletedAdvice = await adviceService.deleteAdvice(id)
      setAdvice(advice.filter(b => b._id !== deletedAdvice._id))
      navigate('/advice')
    }
  
    useEffect(() => {
      console.log("The useEffect is running");
      const fetchAllAdvice = async () => {
        console.log('The Fetch All function is running')
        const data = await adviceService.index()
        setAdvice(data)
      }
      if (user) fetchAllAdvice()
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
        }
        />

        <Route
          path="/events"
          element={
            <ProtectedRoute user={user}>
              <EventList events={events}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/:id"
          element={
            <ProtectedRoute user={user}>
              <EventDetails user={user} 
              handleDeleteEvent={handleDeleteEvent}/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/events/new"
          element={
            <ProtectedRoute user={user}>
              <EventNew handleAddEvent={handleAddEvent} />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/events/:id/edit" 
          element={
          <ProtectedRoute user={user}>
            <EventEdit handleUpdateEvent={handleUpdateEvent} />
          </ProtectedRoute>
        } 
        />
        
        <Route
          path="/supplylist"
          element={
            <ProtectedRoute user={user}>
              <SupplyList supplyLists={supplyLists}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/supplylists/:id"
          element={
            <ProtectedRoute user={user}>
              <SupplyListDetails user={user} 
              handleDeleteSupplyList={handleDeleteSupplyList}/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/supplylists/new"
          element={
            <ProtectedRoute user={user}>
              <SupplyListNew handleAddSupplyList={handleAddSupplyList} />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/supplylists/:id/edit" 
          element={
          <ProtectedRoute user={user}>
            <SupplyListEdit handleUpdateSupplyList={handleUpdateSupplyList} />
          </ProtectedRoute>
        }
        />
        
        <Route
          path="/advice"
          element={
            <ProtectedRoute user={user}>
              <AdviceList advice={advice}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/advice/:id"
          element={
            <ProtectedRoute user={user}>
              <AdviceDetails user={user} 
              handleDeleteAdvice={handleDeleteAdvice}/>
            </ProtectedRoute>
          }
        />

        <Route 
          path="/advice/new"
          element={
            <ProtectedRoute user={user}>
              <AdviceNew handleAddBird={handleAddAdvice} />
            </ProtectedRoute>
          }
        />

        <Route 
          path="/advice/:id/edit" 
          element={
          <ProtectedRoute user={user}>
            <AdviceEdit handleUpdateBird={handleUpdateAdvice} />
          </ProtectedRoute>
        }
        />

      </Routes>
    </>
  )
}

export default App
