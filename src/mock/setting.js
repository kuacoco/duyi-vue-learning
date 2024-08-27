import Mock from 'mockjs'

Mock.mock('/api/setting', 'get', {
  code: 0,
  msg: '',
  data: {
    avatar: 'https://avatars.githubusercontent.com/u/10595589?v=4',
    siteTitle: 'CC的Vue实践',
    github: 'https://github.com/kuacoco',
    qq: '228847758',
    qqQrCode: 'https://github.com/user-attachments/assets/326746bc-11db-4c01-b790-738978c82224',
    weixin: 'kuacoco',
    weixinQrCode: 'https://github.com/user-attachments/assets/d5bad01d-2da8-4ca9-96a2-0a45078a4e66',
    mail: 'kuacoco@gmail.com',
    icp: '苏ICP备19910004号',
    githubName: 'kuacoco',
    favicon: 'https://avatars.githubusercontent.com/u/10595589?s=80&v=4'
  }
})
