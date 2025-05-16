import { NextRequest, NextResponse } from 'next/server'
import db from '@/db/db'

// GET /api/articles
export async function GET(request: NextRequest) {
  const { searchParams } = await request.nextUrl
  const pagenum = searchParams.get('pagenum') || '1'
  const pagesize = searchParams.get('pagesize') || '10'
  const query = searchParams.get('query') || ''

  const data = db.data.posts
  let filterData = query
    ? data.filter(item => {
        const { id, ...other } = item
        return Object.values(other).some(value => value.includes(query))
      })
    : data
  const total = filterData.length
  const startIndex = (+pagenum - 1) * +pagesize
  const endIndex = Math.min(startIndex + +pagesize, total)
  filterData = startIndex >= total ? [] : filterData.slice(startIndex, endIndex)

  return NextResponse.json({
    code: 0,
    message: '获取成功',
    filterData,
  })
}

// POST /api/articles
export async function POST(request: Request) {
  const data = await request.json()

  await db.update(({ posts }) => {
    posts.unshift({
      id: Date.now(),
      title: data.title,
      content: data.content,
    })
  })
  return NextResponse.json({
    code: 0,
    message: '添加成功',
    data,
  })
}
