import { debounce } from '@/utils/index.js'
import { img } from 'mockjs/src/mock/random/image.js'
import defaultImg from '@/assets/default.gif'

let eventBus
let imgs = []

function setImage(img) {
  img.el.src = defaultImg
  const rect = img.el.getBoundingClientRect()
  const height = rect.height || 250
  const clientHeight = document.documentElement.clientHeight
  if (rect.top >= -height && rect.top <= clientHeight) {
    img.el.src = img.src
    imgs = imgs.filter((i) => i !== img)
  }
}

function setImages() {
  for (const img of imgs) {
    setImage(img)
  }
}

const mainScrollHandler = debounce(setImages, 100)

export default {
  created(el, binding, vnode) {
    if (!eventBus) {
      eventBus = vnode.ctx.appContext.provides.eventBus
      eventBus.on('mainScroll', mainScrollHandler)
    }
  },
  mounted(el, binding, vnode) {
    const img = {
      el,
      src: binding.value
    }
    imgs.push(img)
    setImage(img)
  },
  beforeUnmount(el, binding) {
    imgs = imgs.filter((img) => img.el !== el)
  }
}
