'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const DarkMode = ({dark,setDark}) => {
    function handleDark(){
        setDark(!dark)
    }
  return (
    <div>
      <div onClick={handleDark}>{dark?<div className='flex items-center justify-center cursor-pointer'><Image src="/light.png" alt='light' width={30} height={30}/><div className='px-2'>light</div></div>:<div  className='flex items-center justify-center cursor-pointer'><Image alt='dark' src="/dark.png" width={30} height={30}/><div className='px-2'>dark</div></div>}</div>
    </div>
  )
}

export default DarkMode
