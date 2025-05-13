import React from 'react'
import Hero from '../../components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'scale',
}
export default function Page() {
  return <Hero imgUrl='/scale.png' altText='scale' content='Scale~~~' />
}
