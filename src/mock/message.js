import Mock from 'mockjs'
import qs from 'querystring'

Mock.mock('/api/message', 'post', {
  code: 0,
  msg: '',
  data: {
    id: '@guid',
    nickname: '@cname',
    content: '@cparagraph(1, 10)',
    createDate: Date.now(),
    'avatar|1': [
      'https://img2.woyaogexing.com/2024/05/26/1f1a4944d0f2f23e!400x400.png',
      'https://img2.woyaogexing.com/2024/05/26/af8c794dbef3f054!400x400.png',
      'https://img2.woyaogexing.com/2024/05/26/c2bfb02d0bcfff88!400x400.png',
      'https://img2.woyaogexing.com/2024/05/26/26307cdd9d6492c5!400x400.png'
    ]
  }
})

Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function (options) {
  const query = qs.parse(options.url)

  return Mock.mock({
    code: 0,
    msg: '',
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: '@guid',
          nickname: '@cname',
          content: '@cparagraph(1, 10)',
          createDate: Date.now(),
          'avatar|1': [
            'https://img2.woyaogexing.com/2024/05/26/1f1a4944d0f2f23e!400x400.png',
            'https://img2.woyaogexing.com/2024/05/26/af8c794dbef3f054!400x400.png',
            'https://img2.woyaogexing.com/2024/05/26/c2bfb02d0bcfff88!400x400.png',
            'https://img2.woyaogexing.com/2024/05/26/26307cdd9d6492c5!400x400.png'
          ]
        }
      ]
    }
  })
})
