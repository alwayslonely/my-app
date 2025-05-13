import React from 'react'
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'reliability',
}
export default function Page() {
  return <Hero imgUrl='/reliability.jpg' altText='reliability' content='Reliability~~~' />
}
