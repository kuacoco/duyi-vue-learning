<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'Contact',
  components: { Icon }
}
</script>

<template>
  <div class="contact-container">
    <a href="https://kuacoco.github.io/" target="_blank">
      <Icon type="github" />
      kuacoco
    </a>
    <a href="mailto:kuacoco@gmail.com">
      <Icon type="mail" />
      kuacoco@gmail.com
    </a>
    <a
      class="qrcode-hover" href="tencent://message/?Menu=yes&uin=228847758&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
    >
      <Icon type="qq" />
      228847758
    </a>
    <a class="qrcode-hover">
      <Icon type="chat" />
      kuacoco
      <div class="qrcode-container">
        <img src="@/assets/qrcode.png" alt="" />
      </div>
    </a>
  </div>
</template>

<style scoped>
.icon-container {
  font-size: 20px;
}

a {
  display: flex;
  align-items: center;
  cursor: pointer;
  column-gap: 4px;
  line-height: 1.6;
}

.qrcode-hover {
  position: relative;
}

.qrcode-hover .qrcode-container {
  position: absolute;
  left: calc(50% - 100px);
  bottom: 32px;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.2s;
}

.qrcode-hover:hover .qrcode-container {
  transform: scaleY(1);
}

.qrcode-hover .qrcode-container img {
  width: 200px;
  height: 200px;
}

.qrcode-container::after {
  content: '';
  width: 10px;
  height: 10px;
  position: absolute;
  top: 190px;
  transform: translateY(5px) rotate(45deg);
  background: #fff;
  left: calc(50% - 5px);
}
</style>
