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

<template>
  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
    <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
      <template v-for="{ type, text } in actions" slot="actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
        <router-view></router-view>
      </template>
      <img
        slot="extra"
        width="272"
        alt="logo"
        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
      <a-list-item-meta :description="item.description">
        <a slot="title" :href="item.href">{{ item.title }}</a>
        <a-avatar slot="avatar" :src="item.avatar" />
        <a-id="id": arc = "item.id" />
      </a-list-item-meta>
      {{ item.content }}
      <a-button style="marginTop: 16px" @click="handleClick({courseId:id},$event)">了解更多</a-button>
    </a-list-item>
  </a-list>
</template>

<script>
const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    id: i,
    title: `声乐课`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      '刘春 - 北校区105',
    content:
      '本课程致力于培养优美的声音',
  });
}
export default {
  data() {
    return {
      id: 1,
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      props: {
        id: {
               type: Number,
                default: 1
        }
      },
        handleClick(e) {
            console.log(this.$route.query);
             this.$router.push({
                name:'course-detail',
            query:{
                courseId:e.courseId,
            }
            })
        },
    };
   }
};
</script>

<style scoped>

</style>