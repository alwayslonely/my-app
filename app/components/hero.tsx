import Image from 'next/image'
import React from 'react'

interface IProps {
  imgUrl: string
  altText: string
  content: string
}
export default function Hero(props: IProps) {
  return (
    <div className='h-screen'>
      <div className='absolute inset-0 -z-10'>
        <Image src={props.imgUrl} alt={props.altText} fill className='object-cover object-center' />
        <div className='absolute inset-0 bg-gradient-to-r from-gray-900'></div>
      </div>
      <div className='flex justify-center pt-48'>
        <h1 className='text-white text-6xl'>{props.content}</h1>
      </div>
    </div>
  )
}
