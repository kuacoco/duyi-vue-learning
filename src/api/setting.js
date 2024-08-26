import request from '@/api/request.js'

export async function getSetting() {
  return await request.get('/api/setting')
}
