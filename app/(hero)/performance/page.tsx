import React from 'react'
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'performance',
}
export default function Page() {
  return <Hero imgUrl='/performance.png' altText='performance' content='Performance~~~' />
}
