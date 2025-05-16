import { NextResponse } from 'next/server'
import db from '@/db/db'
// DELETE /api/articles/:id
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await db.update(({ posts }) => {
    const index = posts.findIndex(post => post.id === +id)
    posts.splice(index, 1)
  })
  return NextResponse.json({
    code: 0,
    message: '删除成功',
  })
}

// PATCH /api/articles/:id
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const [{ id }, data] = await Promise.all([params, request.json()])
  let idx = -1
  await db.update(({ posts }) => {
    idx = posts.findIndex(post => post.id === +id)
    posts[idx] = {
      ...posts[idx],
      ...data,
    }
  })
  return NextResponse.json({
    code: 0,
    message: '修改成功',
    data: db.data.posts[idx],
  })
}

// GET /api/articles/:id
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const data = db.data.posts.find(post => post.id === +id)
  return NextResponse.json({
    code: 0,
    message: '获取成功',
    data,
  })
}
