import React from 'react'
import './switchbutton.css'
const SwitchButton = () => {
  return (
    <>
    <div className='switch-container'>
     <label className='switchBtn'>
         <input type='checkbox'/>
         <span className='slider round'></span>
     </label>
    </div>
    </>
  )
}

export default SwitchButton