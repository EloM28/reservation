import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <header className="fixed top-0 left-0 w-full bg-white shadow">
      <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link href='/'className="w-12 h-12 rounded-full bg-black">
            <img className="w-12 h-12 rounded-full bg-black" src={'/img/7.jpg'} />
          </Link>
        </div>
        <ul className="flex items-center space-x-24">
          <li>
            <a href="#" className="text-gray-800 text-lg hover:text-yellow-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 text-lg hover:text-yellow-500">
              Room
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 text-lg hover:text-yellow-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 text-lg hover:text-yellow-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  )
}
