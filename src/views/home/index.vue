<template>
  <div>首页</div>
</template>

<script>
import { testPhoneRegister } from "@/api/userInfo.js";
export default {
  data(){
    return{

    }
  },
  mounted(){
    testPhoneRegister().then(res=>{
      console.log(res)
    })
  },
  methods:{

  }
}
</script>

<style>

</style>