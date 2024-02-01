import React from 'react'
import Modal from './modal/Modal'
import { useDispatch } from 'react-redux'
import { logIn,signIn } from '../reducer/counter'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function Login() {
    let dispatch=useDispatch()
    let handleModal=()=>{
       dispatch(logIn())
    }
    let handleModalsignup=()=>{
        dispatch(logIn())
        dispatch(signIn())
    }
    // const [showModal, setShowModal] = useState(false);
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    
    const [loginMessage, setloginMessage] = useState('');
    
  
    const handleLogin = async (e) => {
      e.preventDefault()
      const loginData = {
        number,
        password
      };
  
      try {
        const response = await fetch('http://localhost:9000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(loginData)
        });
        if (response.ok) {
  
          handleModal();
          setloginMessage('Login successful!');
          const responseData = await response.json();
          // Assuming the server returns a token upon successful login
          const token = responseData.accessToken;
          // Save the token to local storage or a state management solution
          localStorage.setItem('authToken', token);
          console.log("Successful Login !");
          
        }
        else {
          setLoginError('Invalid credentials');
          console.log(loginError)
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  return (
    <div>
      <Modal onClose={handleModal}>
        <div>
            <div className='flex justify-center space-x-14'>
            <Link className='w-1/3' to='/login'>
            <button className='bg-[#475f94] rounded-lg w-[100%] p-2 px-6 border border-white hover:scale-110 font-mono font-medium'>LogIn</button></Link>
            <Link  className='w-1/3' to='/signup'><button onClick={handleModalsignup} className='bg-red-600 rounded-lg w-full p-2 px-6 border-white hover:scale-110 opacity-50 hover:opacity-100 font-mono font-medium'>signUp</button></Link>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className='font-mono font-bold text-center '>LogIn</div>
            <div className='ml-14 my-3'>
                <form>
                    <label className='font-mono font-medium mr-2' htmlFor='number'>Phone Number:</label>
                    <input onChange={(e)=>setNumber(e.target.value)} className='ml-2 border w-[60%] border-[#475f94] p-2 px-5 rounded-lg cursor-text text-sm text-slate-500' type='number' name='number' required placeholder='Enter your Regestered Number'></input>
                    <div>
                    <label className='font-mono font-medium mr-2 ' htmlFor='password'>Password:</label>
                    <input onChange={(e)=>setPassword(e.target.value)} id='myInput' className=' ml-11 border w-[60%] border-[#475f94] p-2 px-5 rounded-lg cursor-text text-sm text-slate-500 mt-3' type='password' name='password' required placeholder='Enter your Password' ></input>
                    </div>
                    <div className='flex w-100% justify-center'>
                   <button onClick={handleLogin} type='submit' className='bg-[#475f94] rounded-lg p-2 px-6 border border-white hover:scale-110 font-mono font-medium mt-3'>LogIn</button>
                   </div>
                </form>
                {/* <input type="checkbox" onclick="myFunction()">Show Password</input> */}
            </div>
        </div>
      </Modal>
    </div>
  )
}
