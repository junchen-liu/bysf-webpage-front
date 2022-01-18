<template>
  <div>
    <!-- Header Background Image -->
    <div class="profile-nav-bg" style="background-image: url('images/bg-profile.jpg')"></div>
    <!-- / Header Background Image -->

    <!-- User Profile Card -->
    <a-card :bordered="false" class="card-profile-head" :bodyStyle="{padding: 0,}">
      <template #title>
        <a-row type="flex" align="middle">
          <a-col :span="24" :md="12" class="col-info">
            <a-input-search class="header-search" :class="searchLoading ? 'loading' : ''" placeholder=" 请输入课程名称或代码" @search="onSearch" :loading='searchLoading'>
                <a-icon slot="prefix" type="search" />
              <a-button slot="enterButton">
                搜索
              </a-button>
            </a-input-search>
          </a-col>
          <a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
            <a-radio-group v-model="profileHeaderBtns" size="small">
              <a-radio-button value="overview">OVERVIEW</a-radio-button>
              <a-radio-button value="teams">TEAMS</a-radio-button>
              <a-radio-button value="projects">PROJECTS</a-radio-button>
            </a-radio-group>
          </a-col>
        </a-row>
      </template>
    </a-card>
    <!-- User Profile Card -->



  </div>
</template>

<script>
export default {
  name: "course"
}
</script>

<style scoped>

</style>