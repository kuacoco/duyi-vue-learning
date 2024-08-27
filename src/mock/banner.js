import Mock from 'mockjs'

Mock.mock('/api/banner', 'get', {
  code: 0,
  msg: '',
  data: [
    {
      id: '1',
      midImg: 'https://github.com/user-attachments/assets/081ee9ed-63a6-4931-b8ba-f685690efeb4',
      bigImg: 'https://github.com/user-attachments/assets/081ee9ed-63a6-4931-b8ba-f685690efeb4',
      title: '凛冬将至',
      description: '人唯有恐惧的时候方能勇敢'
    },
    {
      id: '2',
      midImg: 'https://github.com/user-attachments/assets/00b3d9d3-f6b0-49b4-afeb-09ef201f5263',
      bigImg: 'https://github.com/user-attachments/assets/00b3d9d3-f6b0-49b4-afeb-09ef201f5263',
      title: '血火同源',
      description: '如果我回头，一切都完了'
    },
    {
      id: '3',
      midImg: 'https://github.com/user-attachments/assets/ea41ebd0-bf5b-4114-a94d-85f41cb19226',
      bigImg: 'https://github.com/user-attachments/assets/ea41ebd0-bf5b-4114-a94d-85f41cb19226',
      title: '听我怒吼',
      description: '兰尼斯特有债必偿'
    }
  ]
})
