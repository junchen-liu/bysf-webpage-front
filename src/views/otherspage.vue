<template>
  <a-layout>
      <a-layout-sider>
        <OthersPageSiderbar>
        </OthersPageSiderbar>
      </a-layout-sider>

      <a-layout-content>
        <!-- Article Card -->
        <router-view></router-view>
        <!-- / Article Card -->
      </a-layout-content>
    </a-layout>
</template>




<script>
//这里需要实现的逻辑是，在sider menu选中了什么，就需要把相应参数的传过来做查询

import OthersPageSiderbar from "@/components/Sidebars/OthersPageSiderbar";


export default {
  components:{
    OthersPageSiderbar,
  },
  name: "otherspage",
  data() {
    return {
      // Project cards data
    }
  },
}
</script>

<style scoped>

</style>