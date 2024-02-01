import React from 'react'
import Modal from './modal/Modal'
import { useDispatch } from 'react-redux'
import { signIn ,logIn} from '../reducer/counter'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'

export default function Signin() {
    let dispatch=useDispatch()
    let handleModal=()=>{
       dispatch(signIn())
    }
    let handleModallogin=()=>{
        dispatch(signIn())
        dispatch(logIn())
        handleClose()
    }
    const[showModal,setShowModal]=useState(false)
    const [username, setUsername] = useState('');
  
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationMessage, setRegistrationMessage] = useState('');
    const navigate = useNavigate()
  
    const handleSignup = async (e) => {
      e.preventDefault()
      const userData = {
        username,
        number,
        email,
        password
      };
  
      try {
        const response = await fetch('http://localhost:9000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
  
        if (response.ok) {
          setRegistrationMessage('Registration successful!');
          setTimeout(()=>{
              setRegistrationMessage('')
              handleModal()
          },1000)
          
           setUsername('');
           setNumber('');
            setEmail('');
            setPassword('');
          // navigate('/')
        } else {
          console.error('Error registering user');
          setRegistrationMessage("Invalid credentials User Not Registered")
          let para=document.querySelector('#para')
          para.style.color="red"
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const handleClose = () => {
      setShowModal(false);
      setRegistrationMessage('');
      setUsername('');
      setNumber('');
      setEmail('');
      setPassword('');
    };
  
  return (
    <div>
      <Modal onClose={handleModal}>
        <div>
            <div className='flex justify-center space-x-14'>
            <Link className='w-1/3' to='/login'>
            <button onClick={handleModallogin} className='bg-red-600 rounded-lg w-[100%] p-2 px-6 border border-white hover:scale-110 font-mono font-medium opacity-50 hover:opacity-100'>LogIn</button></Link>
            <Link  className='w-1/3' to='/signup'><button className='bg-[#475f94] rounded-lg w-full p-2 px-6 border-white hover:scale-110 font-mono font-medium'>signUp</button></Link>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className='font-mono font-bold text-center '>SignUp</div>
            <div className='ml-14 my-3'>
            {registrationMessage && <p id='para' style={{ color: 'green' }}>{registrationMessage}</p>}
                <form>
                <div>
                    <label className='font-mono font-medium mr-2 ' htmlFor='username'>User Name: </label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className='ml-8 border w-[60%] border-[#475f94] p-2 px-5 rounded-lg cursor-text text-sm text-slate-500 mb-3' type='text' name='name' required placeholder='Enter your name' ></input>
                </div>
                    <label className='font-mono font-medium mr-2' htmlFor='number'>Phone Number: </label>
                    <input value={number} onChange={(e) => setNumber(e.target.value)} className='ml-2 border w-[60%] border-[#475f94] p-2 px-5 rounded-lg cursor-text text-sm text-slate-500' type='number' name='number' required placeholder='Enter your Number'></input>
                    <div>
                    <label className='font-mono font-medium mr-2 ' htmlFor='email'>Email: </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='ml-[4.25rem] border w-[60%] border-[#475f94] p-2 px-5 rounded-lg cursor-text text-sm text-slate-500 mt-3' type='email' name='email' required placeholder='Enter your Email' ></input>
                   </div>
                    <div>
                    <label className='font-mono font-medium mr-2 ' htmlFor='password'>Password: </label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className='ml-11 border w-[60%] border-[#475f94] p-2 px-5 rounded-lg cursor-text text-sm text-slate-500 mt-3' type='password' name='password' required placeholder='Enter your Password' ></input>
                    </div>
                    <div className='flex w-100% justify-center'>
                   <button onClick={handleSignup} type='submit' className='bg-[#475f94] rounded-lg p-2 px-6 border border-white hover:scale-110 font-mono font-medium mt-3'>SignUp</button>
                   </div>
                </form>
                {/* <input type="checkbox" onclick="myFunction()">Show Password</input> */}
            </div>
        </div>
      </Modal>
    </div>
  )
}
