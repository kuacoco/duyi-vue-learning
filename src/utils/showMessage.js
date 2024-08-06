import Icon from '@/components/Icon.vue'
import { getComponentRootDom } from '@/utils'
import showMessage from './showMessage.module.less'

/**
 *
 * @param options {Object} {
 *   content: 内容
 *   type: info warn success error
 *   duration: 500, 0为不消失
 *   container: 容器
 *   callback: 回调函数
 * }
 */

export default function (options) {
  const content = options.content || ''
  const type = options.type || 'info'
  const duration = options.duration >= 0 ? options.duration : 500
  const container = options.container || document.body

  const div = document.createElement('div')
  const icon = getComponentRootDom(Icon, { type: 'info' })
  div.innerHTML = `<div class="${showMessage.icon}">${icon.outerHTML}</div><div>${content}</div>`
  div.className = `${showMessage.message} ${showMessage['message-' + type]}`
  if (getComputedStyle(container).position === 'static') {
    container.style.position = 'relative'
  }
  container.appendChild(div)
  container.clientHeight

  div.style.opacity = '1'
  div.style.transform = 'translate(-50%, -50%)'

  if (duration > 0) {
    setTimeout(() => {
      div.style.opacity = '0'
      div.style.transform = 'translate(-50%, -50%) translateY(15px)'
      div.addEventListener(
        'transitionend',
        () => {
          div.remove()
          options.callback && options.callback()
        },
        { once: true }
      )
    }, duration)
  }
}
