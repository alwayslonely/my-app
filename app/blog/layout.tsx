import React from 'react'

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className='max-w-3xl mx-auto mt-6'>{children}</div>
}
