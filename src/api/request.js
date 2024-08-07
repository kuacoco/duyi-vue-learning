import axios from 'axios'
import { showMessage } from '@/utils'

const ins = axios.create()
ins.interceptors.response.use(function (response) {
  if (response.data.code !== 0) {
    showMessage({
      content: response.data.msg,
      type: 'error',
      duration: 2000
    })
    return null
  }
  return response.data.data
})

export default ins
