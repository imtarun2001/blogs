import React from 'react'
import './Spinner.css'

export default function Spinner() {
  return (
    <div className='spin'>
        <div className="spinner"></div>
        <div className='loading'>Please wait...</div>
    </div>
  )
}
