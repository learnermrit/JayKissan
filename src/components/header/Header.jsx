import React from 'react'
import {LogoutBtn,Logo,Container} from "../index.jsx"
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  //to see user is logged in or not we will see his status from store Status  by Selector
  const authStatus = useSelector((state)=>{return state.auth.status}) 

  const navigate = useNavigate(); // do same work as Link  

  //making and array to make a production grade list to add navbar items
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]
  return (
  //  <div>Header</div>
  <header className="py-3 shadow headerr">
  <Container>
    <div className=''>
   <nav className='flex '>
     <div className='mr-4' >
       <Link to="/">
        <Logo width="70px"></Logo>
       </Link>

     </div>

     <ul className='flex ml-auto'>
       {navItems.map((item)=>(item.active?(<li key={item.name}>
         <button onClick={()=>{navigate(item.slug)}} className='inline-bock px-6 py-2 duration-200 hover:bg-red-200 rounded-full'>{item.name}</button>
       </li>):null))}
       {authStatus && (
         <li>
           <LogoutBtn></LogoutBtn>
         </li>
       )}
     </ul>
   </nav>
   </div>
  </Container>

 </header>
  )
}

export default Header
