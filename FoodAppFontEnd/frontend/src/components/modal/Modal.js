import React from 'react'
import ReactDOM from 'react-dom'
// import { Dropback } from './Loader'
export default function Modal({onClose,children}) {
  return (
      ReactDOM.createPortal(
        <>
        {/* <Dropback onClose={onClose}/> */}
        <div className='modal'>{children}
        <button type="close" onClick={onClose}>X</button>
        </div>
        </>,
        document.getElementById("modal-root")
      )
  )
}
