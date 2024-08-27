<script>
import Icon from '@/components/Icon.vue'
import { mapState } from 'vuex'

export default {
  name: 'Contact',
  components: { Icon },
  computed: mapState('setting', ['data'])
}
</script>

<template>
  <div class="contact-container" v-if="data">
    <a :href="data.github" target="_blank">
      <Icon type="github" />
      {{ data.githubName }}
    </a>
    <a :href="`mailto:${data.mail}`">
      <Icon type="mail" />
      {{ data.mail }}
    </a>
    <a
      class="qrcode-hover"
      :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
    >
      <Icon type="qq" />
      {{ data.qq }}
      <div class="qrcode-container">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </a>
    <a class="qrcode-hover">
      <Icon type="weixin" class="wx-icon" />
      {{ data.weixin }}
      <div class="qrcode-container">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </a>
  </div>
</template>

<style scoped lang="less">
@import '~@/styles/var.less';

.contact-container {
  color: @gray;
  padding: 20px;
  font-size: 14px;

  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    column-gap: 10px;
    height: 30px;
    margin: 14px 0;

    .icon-container {
      font-size: 26px;
    }

    .wx-icon {
      font-size: 32px;
      text-indent: -3px;
    }
  }
}

.qrcode-hover {
  position: relative;
}

.qrcode-hover {
  .qrcode-container {
    position: absolute;
    left: 0;
    bottom: 32px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: transform 0.3s;
    border-radius: 5px;
    padding: 10px 15px;
    background-color: #fff;
    img {
      width: 150px;
      height: 150px;
    }
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      position: absolute;
      transform: translateX(-50%) rotate(45deg);
      background: #fff;
      left: 50%;
      bottom: -4px;
    }
  }

  &:hover .qrcode-container {
    transform: scaleY(1);
  }
}
</style>
