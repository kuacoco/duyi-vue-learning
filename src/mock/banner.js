import Mock from 'mockjs'

Mock.mock('/api/banner', 'get', {
  code: 0,
  msg: '',
  data: [
    {
      id: '1',
      midImg: 'http://img.netbian.com/file/2024/0826/003331inzNk.jpg',
      bigImg: 'http://img.netbian.com/file/2024/0826/003331inzNk.jpg',
      title: '凛冬将至',
      description: '人唯有恐惧的时候方能勇敢'
    },
    {
      id: '2',
      midImg: 'http://img.netbian.com/file/2024/0825/225722HbIJA.jpg',
      bigImg: 'http://img.netbian.com/file/2024/0825/225722HbIJA.jpg',
      title: '血火同源',
      description: '如果我回头，一切都完了'
    },
    {
      id: '3',
      midImg: 'http://img.netbian.com/file/2024/0821/224505TZVFA.jpg',
      bigImg: 'http://img.netbian.com/file/2024/0821/224505TZVFA.jpg',
      title: '听我怒吼',
      description: '兰尼斯特有债必偿'
    }
  ]
})
