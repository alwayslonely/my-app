import React from 'react'
import { products } from '@/data/products'
import Image from 'next/image'

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = products.find(item => item.id === id)!
  return (
    <div className='container mx-auto pt-8'>
      <Image
        src={product.src}
        alt={product.alt}
        width={300}
        height={300}
        className=' block rounded-lg mx-auto mt-4'
      />
      <div className='border-2 border-dashed border-gray-500 rounded-lg m-3 p-3 leading-8'>
        <p>
          <strong>产品名称：</strong>
          {product.name}
        </p>
        <p>
          <strong>价格：</strong>
          {product.price}
        </p>
        <p>
          <strong>描述：</strong>
          {product.alt}
        </p>
      </div>
    </div>
  )
}
