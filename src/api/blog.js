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

export async function getBlog(id) {
  return await request.get('/api/blog/' + id)
}

export async function postComment(commentInfo) {
  return await request.post('/api/comment', commentInfo)
}

export async function getCommentList(page = 1, limit = 10, blogId = -1) {
  return await request.get('/api/comment', {
    params: {
      page,
      limit,
      blogId
    }
  })
}
