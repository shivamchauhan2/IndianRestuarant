import React, { useState } from 'react'
import { Home,Pizza,AlignJustify,SquareUser,ShoppingCart,LogIn } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import Modal from './modal/Modal'
import Cart from './cart/Cart'
import { logIn } from '../reducer/counter'

export default function Navbar() {
  const dishesToCart=useSelector(state=>state.counter.items)
  const showSignIn=useSelector(state=>state.counter.showSignIn)
  let dispatch=useDispatch()
  // console.log(dishesToCart)
  const [showModal,setShowModal]=useState(false)
  let handleModal=()=>{
    setShowModal(previousState=>!previousState)
  }
  let handleShowLogin=()=>{
   !showSignIn &&dispatch(logIn())
  }
  return (
    <>
    <div className=' flex items-center text-white bg-[#475f94] px-2 py-2  rounded-md justify-between'>
        <div>
           <h3 className=' text-2xl font-bold'>Indian Restuarant</h3>
        </div>
        <div>
           <ul className='flex space-x-16 font-semibold'>
            <Link to='/'><li className='flex hover:scale-110 transition-transform duration-500 cursor-pointer'><Home className=' mr-1'/>Home</li></Link>
            <Link to='/about'> <li className=' flex hover:scale-110 cursor-pointer transition-transform duration-500'> <Pizza className='mr-1' />About</li></Link>
            <Link to="/menu"> <li className='flex hover:scale-110 cursor-pointer transition-transform duration-500'><AlignJustify className="mr-1"/>Menu</li></Link>
            <a href="/contact"><li className=' flex hover:scale-110 cursor-pointer transition-transform duration-500'><SquareUser className="mr-1" />Contact Us</li></a>
           </ul>
        </div>
        <div className='flex'>
        <Link to="/login"><li className='flex mr-5 hover:scale-110 cursor-pointer transition-transform duration-500'><LogIn onClick={handleShowLogin}/></li></Link>
        <div className="mr-3 relative ">
           <p className='absolute -top-1 text-sm border border-white -left-4 bg-red-600 rounded-full w-4 text-center'>{dishesToCart.length}</p>
           <button onClick={handleModal}><ShoppingCart /></button>
        </div>
        </div>
    </div>
    {showModal && <Cart onClose={handleModal}></Cart>}
    </>
  )
}
