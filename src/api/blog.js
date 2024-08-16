import request from './request'

export async function getBlogList(page = 1, limit = 10, categoryId = -1) {
  return await request.get('/api/blog', {
    params: {
      page,
      limit,
      categoryId
    }
  })
}

export async function getBlogCategories() {
  return await request.get('/api/blogCategories')
}
