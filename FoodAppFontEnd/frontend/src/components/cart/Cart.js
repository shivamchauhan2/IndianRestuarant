import React from 'react'
import Modal from '../modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../reducer/counter'

export default function Cart({onClose}) {
    const cart=useSelector(state=>state.counter)
    let dispatch=useDispatch()
    let cartDishes=cart.items
    let cartTotalAmount=cart.totalAmount

    let increament=(dish)=>{
        dispatch(increment(dish))
    }
    let decreament=(id)=>{
        dispatch(decrement(id))
    }
    console.log(cartDishes,cartTotalAmount)
   return (
    <div>
      <Modal onClose={onClose}>
        { cartDishes.length>0?cartDishes.map((dish)=>{
        return <div className=' inline-flex '>
            <div className='flex mr-10 mb-11 border border-[#475f94] rounded-md'>
            <img className='rounded-md' src={dish.image} alt='first' ></img>
            <div className='mx-2 flex flex-col'>
                <p className=' font-mono font-semibold'>{dish.name}</p>
                <div className='font-mono font-medium'>Price: ${dish.price}</div>
                <div className='font-mono font-medium'>SubTotal:{(dish.quantity*dish.price).toFixed(2)}</div>
                <div className='flex space-x-2'>
                  {<button onClick={()=>decreament(dish.id)} className='bg-red-600 rounded-md p-2 mt-3 border border-[#000008] hover:scale-110 px-2 font-bold'> - </button>}
                 <button onClick={()=>increament(dish)} className={`hover:bg-red-600 rounded-md p-2 mt-3 border w-16 border-[#000008] hover:scale-110 bg-[#475f94]}`}>{dish.quantity || "Add to Cart"}</button>
                  {<button onClick={()=>increament(dish)} className='bg-red-600 rounded-md p-2 px-2 font-bold mt-3 border border-[#000008] hover:scale-110'> + </button>}
               </div>
          </div>
        </div> 
        </div>}):
        <div className='flex justify-center items-center h-[300px]'>Add the Items To the Cart</div>}
        <hr></hr>
        <div className=' bg-[#475f94] p-3 flex justify-center font-mono font-semibold items-center'>
        <div>Total Amount : $ {cartTotalAmount.toFixed(2)} </div>
        <button className='bg-red-600 rounded-md p-2 ml-2 border border-white'>Checkout</button>
        </div>

     </Modal>
    </div>
  )
}
