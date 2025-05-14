import React from 'react'
import BlogCard from '../../components/blogCard'
import { data } from '../../data'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  console.log(id)
  return {
    title: `博客详情-${id}`,
  }
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = data.find(item => item.id === Number(id))

  if (!item || !item.body) {
    return <div>data not found</div>
  }

  return <BlogCard title={item.title} body={item.body} />
}
