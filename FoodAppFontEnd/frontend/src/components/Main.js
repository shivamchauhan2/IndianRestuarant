import React from 'react'

export default function Main() {
  return (
    <div className='section w-[100vw] h-screen relative'>
      <div className='heading inline-block text-[#475f94] pt-2 p-20 font-bold font-mono text-center  text-4xl'>Indian <br></br><span> Restuarant</span></div>
        <img className="img absolute inset-0 -z-20 rounded-md w-[100%] h-[100%]" src='/assets/image1.webp' alt='Restuarant'></img>
    <div className='absolute right-32 top-16 w-60 font-mono font-semibold pt-4 flex flex-col items-center'>
      <div className=' text-[#000008] opacity-75 text-pretty'>We love our customers, we serve best Indian food, so feel free to visit during normal business hours. We are also a Chineese Restaurant With Delivery...</div>
      <button className=' bg-red-600 rounded-md p-2 mt-3 border border-[#000008] hover:scale-110 hover:bg-[#475f94]'>Order now...</button>
    </div>
    </div>
  )
}
