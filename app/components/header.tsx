'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  { name: 'Performance', path: '/performance' },
  { name: 'Reliability', path: '/reliability' },
  { name: 'Scale', path: '/scale' },
]

export default function Header() {
  const pathName = usePathname()
  return (
    <div className='absolute w-full z-10'>
      <div className='flex justify-between container mx-auto text-white p-8 items-center'>
        <Link className='text-3xl font-bold' href='/'>
          Home
        </Link>
        <div className='text-xl space-x-4'>
          {linkData.map(link => (
            <Link
              key={link.name}
              href={link.path}
              className={`hover:text-purple-500 ${pathName === link.path ? 'text-purple-500' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
