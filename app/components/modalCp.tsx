'use client'
import React from 'react'
import Image from 'next/image'
import { products } from '@/data/products'
import { useRouter } from 'next/navigation'

interface IModelProps {
  id: string
}
export default function ModalCp(props: IModelProps) {
  const product = products.find(item => item.id === props.id)!
  const router = useRouter()
  return (
    <div>
      <div
        className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]'
        onClick={router.back}
      >
        <Image src={product.src} alt={product.alt} width={500} height={500} />
      </div>
    </div>
  )
}
