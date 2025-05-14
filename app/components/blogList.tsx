'use client'
import { Avatar, List } from 'antd'
import Link from 'next/link'
import React from 'react'
import { data } from '../data'

export default function BlogList() {
  return (
    <List
      itemLayout='horizontal'
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            className='!items-center'
            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
            title={<Link href={`/blog/${item.id}`}>{item.title}</Link>}
          />
        </List.Item>
      )}
    />
  )
}
