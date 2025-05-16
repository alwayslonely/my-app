import { NextResponse } from 'next/server'
// This function is called when the route is accessed
// It returns a JSON response with the current time
// The dynamic export is set to 'force-static' to ensure the response is cached
// The revalidate export is set to 60 seconds to control the cache duration
export const dynamic = 'force-static'
export const revalidate = 60
export function GET() {
  console.log(dynamic)
  console.log('Get /api/time')
  return NextResponse.json({
    code: 0,
    message: '获取成功',
    time: new Date().toLocaleString(),
  })
}
