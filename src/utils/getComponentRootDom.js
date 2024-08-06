import { createApp } from 'vue'

export default function (comp, props = {}) {
  return createApp(comp, props).mount(document.createElement('div')).$el
}
