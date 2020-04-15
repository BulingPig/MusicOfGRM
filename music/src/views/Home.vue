<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { phoneLogin, checkPhone } from '@/api/login'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    phoneLogin({ phone: '13870083309', password: 'wangwenEVEN1995' }).then(res => {

    })
    checkPhone('13870083309').then(res => {

    })
  }
}
</script>
