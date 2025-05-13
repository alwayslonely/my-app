import React from 'react'
import Hero from '../components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}
export default function Page() {
  return <Hero imgUrl='/home.png' altText='home' content='Professional Cloud Hosting' />
}
