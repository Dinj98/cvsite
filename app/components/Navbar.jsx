'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [drop, setDrop] = useState(false)
  function handleHover(e){
    e.preventDefault()
    setDrop(!drop)
  }
  return (
    <div className='[&>*]:mx-4 [&>*]:text-2xl [&>*]:font-bold py-4'>
      <Link href='/'>Home</Link>
      <Link href='/skills' ><button onClick={handleHover}>{drop?'reza':'skill'}</button></Link>
      <Link href='/contact'>Contact</Link>
      <Link href='/about'>About us</Link>
    </div>
  )
}

export default Navbar
