<template>
  <a-card class="card-project">
    <img
        slot="cover"
        alt="example"
        :src="cover"
    />
    <div class="card-tag">课程 #{{ id }}</div>
    <h5>{{ title }}</h5>
    <p>
      {{ content }}
    </p>
    <a-row type="flex" :gutter="6" class="card-footer" align="middle">
      <a-col :span="12">
        <a-button size="small" @click = "handleClick({articleId:id},$event)">查看该课程</a-button>
      </a-col>
      <a-col :span="12" class="text-right">
        <a-space :size="-12" class="avatar-chips">
          <a-avatar  size="small" v-for="(img, index) in team" :key="index" :src="img" />
        </a-space>
      </a-col>
    </a-row>
  </a-card>
<!--  <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">-->
<!--    <a-list-item slot="renderItem" key="item.title" slot-scope="item">-->
<!--      <template v-for="{ type, text } in actions" slot="actions">-->
<!--        <span :key="type">-->
<!--          <a-icon :type="type" style="margin-right: 8px" />-->
<!--          {{ text }}-->
<!--        </span>-->
<!--      </template>-->
<!--      <img-->
<!--          slot="extra"-->
<!--          width="272"-->
<!--          alt="logo"-->
<!--          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"-->
<!--      />-->
<!--      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>-->
<!--      <a-list-item-meta :description="item.description">-->
<!--        <a slot="title" :href="item.href">{{ item.title }}</a>-->
<!--        <a-avatar slot="avatar" :src="item.avatar" />-->
<!--      </a-list-item-meta>-->
<!--      {{ item.content }}-->
<!--      <a-button style="marginTop: 16px" @click="handleClick({courseId:id},$event)">了解更多</a-button>-->
<!--    </a-list-item>-->
<!--  </a-list>-->
</template>


<script>
export default ({
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    cover: {
      type: String,
      default: "",
    },
    team: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick(e) {
      console.log(this.$route.query);
      this.$router.push({
        name:'article-content',
        query:{
          articleId:e.articleId,
        }
      })
    },
  },

})
// const listData = [];
// for (let i = 0; i < 5; i++) {
//   listData.push({
//     href: 'http://10.185.156.106:8080/#/homepage',
//     id: i,
//     title: `声乐课`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//         '刘春 - 北校区105',
//     content:
//         '本课程致力于培养优美的声音',
//   });
// }
// export default {
//   data() {
//     return {
//       id: 1,
//       listData,
//       pagination: {
//         onChange: page => {
//           console.log(page);
//         },
//         pageSize: 3,
//       },
//       props: {
//         id: {
//           type: Number,
//           default: 1
//         }
//       },
//       handleClick(e) {
//         console.log(this.$route.query);
//         this.$router.push({
//           name:'course-detail',
//           query:{
//             courseId:e.courseId,
//           }
//         })
//       },
//     };
//   },
// };
</script>