<template>
  <div class="home">
    <button @click="getRoleList">我是获取的8981的数据</button>
    <button @click="getRoleList2">我是获取的8989的数据</button>

  </div>
</template>

<script>
  import {getTeSt} from '../api/permission'
  import {getTeSt2} from '../api/permission'

import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {

  },
  methods:{
    async getRoleList() {
      let test = await getTeSt()
      console.log(test)
    },
    async getRoleList2() {
      let test = await getTeSt2({dbname:'ultra'})
      console.log(test)
    }
  }
}
</script>
