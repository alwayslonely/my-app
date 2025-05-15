import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '拦截路由',
  description: '拦截路由演示',
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AntdRegistry>
          {children}
          {modal}
        </AntdRegistry>
      </body>
    </html>
  )
}
