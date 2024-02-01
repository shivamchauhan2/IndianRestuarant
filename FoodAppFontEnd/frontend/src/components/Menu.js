import React, { useEffect, useState } from 'react'
import Dishes from './Dishes'
import About from './About'
import { useSelector } from 'react-redux'
import Login from './Login'
import Signin from './Signin'
// import About from './About'
export default function Menu() {
  const[dishes,setDishes]=useState([])
  const statusLogin=useSelector(state=>state.counter)
  useEffect( ()=>{
    async function fetchData(){
    const data= await fetch("http://localhost:9000/getdishes")
    const dishes=await data.json()
    const transFormedData=dishes.map((dish)=>{
        return {...dish,
         quantity:0,
        }
    })
    setDishes(transFormedData)
    }
    fetchData()
  },[])
  return (
    <div>
      {dishes.length>0? dishes.map(dish=>{
         return <Dishes key={dish._id} dish={dish}></Dishes>
      }):<About></About>}
      {statusLogin.showLogIn && <Login></Login>}
      {statusLogin.showSignIn && <Signin></Signin>}
    </div>
  )
}
