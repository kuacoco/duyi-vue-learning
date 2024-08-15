import loading from './loading.module.less'
import imageSrc from '@/assets/loading.svg'

function getImgDom() {
  return document.querySelector('img[data-role=loading]')
}

function createImgDom() {
  const imgDom = document.createElement('img')
  imgDom.src = imageSrc
  imgDom.dataset.role = 'loading'
  imgDom.className = loading.loading
  return imgDom
}

export default (el, binding) => {
  const imgDom = getImgDom()
  if (binding.value) {
    !imgDom && el.appendChild(createImgDom())
  } else {
    imgDom && imgDom.remove()
  }
}
