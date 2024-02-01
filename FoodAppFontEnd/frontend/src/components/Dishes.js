import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../reducer/counter'
export default function Dishes({dish}) {
    // console.log(dish)
    let counter=useSelector(state=>state.counter.items.find(item => item.id === dish.id))
    let dispatch=useDispatch()
    console.log(counter)
    // let [noOfItems,setNoOfItems]=useState(0)
    let increament=(event)=>{
      //  setNoOfItems(noOfItems+1)
       dispatch(increment(dish))
    }
    let decreament=()=>{
      // setNoOfItems(noOfItems-1)
      dispatch(decrement(dish.id))
    }
  return (
<div className='flex flex-col'>
    <div className='flex mt-10 justify-between items-center bg-gray-100 rounded-md'>
      <div className='relative'>
      <img className="rounded-md w-[300px] ml-10 m-3" src={dish.image} alt='first'></img>
      <p className=' absolute top-6 left-16 p-2 font-mono font-bold text-xl'>{dish.name}</p>
      <p className='absolute bottom-6 right-6'>$ {dish.price}</p>
      </div>
      <div className='w-1/2 mr-60 ml-14 '>
         <div className=' font-mono'>{dish.description}</div>
         <div className='flex space-x-2'>
          { counter?.quantity && <button onClick={decreament} className='bg-red-600 rounded-md p-2 mt-3 border border-[#000008] hover:scale-110 px-5 font-bold'> - </button>}
         <button onClick={increament} className={`hover:bg-red-600 rounded-md p-2 mt-3 border w-32 border-[#000008] hover:scale-110 ${!counter?.quantity>0?"bg-[#475f94]":"bg-white"}`}>{counter?.quantity || "Add to Cart"}</button>
        { counter?.quantity && <button onClick={increament} className='bg-red-600 rounded-md p-2 px-5 font-bold mt-3 border border-[#000008] hover:scale-110'> + </button>}
         </div>
      </div>
    </div>
    </div>
  )
}
