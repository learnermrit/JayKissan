import React,{ useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import { Header,Footer } from './components/index.jsx'
import authService from './appwrite/auth.js'
import { login,logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
/*
 as app loads we want to see user is loggedin or not
 we will see it from State that is maintained by store
 if user is loggedin then we will show them something
*/

function App() {

  /*we should maintain Loading State to do  Conditional Rendering
   as when fetching data we can show loading when fetching from network ,database 

  */
 
  const [loading, setLoading] = useState(true)
  //we need dispatch to change state in store
  const dispatch= useDispatch()
  //by using useEffect we will check that user is logged in or not when app loads

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading? (
    <>
      
       <div className='min-h-screen flex flex-wrap content-between'>
         <div className='w-full block'>
         <Header/>
         <main>
           <Outlet />
        </main>
         <Footer/>
         </div>
       </div>
      
   </>
  ): (
    <>
      <div>Loading</div>
    
    </>
  )
  //here between header and footer react router dom provides outlet to switch between pages 
  // return !loading?():() // conditional rendring if not loading

  // return (
  //   <>
  //     <Header></Header>
  //     <Footer></Footer>
  //     <div>
  //      Mrityunjay
  //     </div>
      
  //   </>
  // )
}

export default App
