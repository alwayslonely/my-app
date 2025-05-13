'use client'
import { Card } from 'antd'

interface BlogCardProps {
  title: string | undefined
  body: string | undefined
}

export default function BlogCard({ title, body }: BlogCardProps) {
  if (!title || !body) {
    return <div>Content not available</div>
  }
  return (
    <Card title={title} variant='borderless' style={{ width: 300 }}>
      <p>{body}</p>
    </Card>
  )
}
