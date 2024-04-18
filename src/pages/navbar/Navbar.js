import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <header className="fixed top-0 left-0 w-full bg-white shadow z-20">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link href='/'className="w-12 h-12 flex flex-row rounded-full bg-black">
            <img className="w-12 h-12 rounded-full bg-black" src={'/logo/logohotel.png'} />
            <span className="text-gray-800 text-3xl font-semibold items-center hover:text-yellow-500">RaudHotel</span>
          </Link>
        </div>
        <ul className="flex items-center space-x-24">
          <li>
            <a href="#" className="text-gray-800 text-lg hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#room" className="text-gray-800 text-lg hover:text-yellow-500">
              Room
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-800 text-lg hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-800 text-lg hover:text-yellow-500">
              Contact
            </a>
          </li>
          {/* {status!='authenticated' && !session && (
          <li>
            <Link href='/api/auth/signin'>
              <span
                onClick={e => {
                  e.preventDefault()
                  signIn('google')
                }}>
                Sign In
              </span>
            </Link>
          </li>
        )}
        {session && (
          <li>
            <Link href='/api/auth/signout'>
              <span
                onClick={e => {
                  e.preventDefault()
                  signOut('google')
                }}>
                  <img src={session.user.image} className='rounded-full' width='30' height='30' />
                Sign Out
              </span>
            </Link>
          </li>
        )} */}
        </ul>
      </nav>
    </header>
  </div>
  )
}
