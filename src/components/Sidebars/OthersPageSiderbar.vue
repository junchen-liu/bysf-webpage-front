<template>
  <div>

    <a-menu
        :default-selected-keys="['1']"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
    >
      <a-sub-menu v-for="(group, index) in courses" :key="index">
        <span slot="title"><a-icon type="mail" /><span>{{group.title}}</span></span>
        <a-menu-item v-for="(subGroup, subIdx) in group.team" :key="subIdx" @click="titleClick({group:group.title,subGroup:subGroup},$event)">
          {{subGroup}}
        </a-menu-item>
      </a-sub-menu>

    </a-menu>
  </div>
</template>
<script>
//mock data
const courses = [
  {
    id: 1,
    title: "学历",
    content: "As Uber works through a huge amount of internal management turmoil.",
    cover: "images/course-demo.jpeg",
    team: [
      "高中",
      "大学",
    ],
  },
  {
    id: 2,
    title: "职业发展探索",
    content: "Music is something that every person has his or her own specific opinion about.",
    cover: "images/course-demo.jpeg",
    team: [
      "艺术文娱",
      "法律教育",
      "自然科学与健康",
      "骄傲码农",
    ],
  },
  {
    id: 3,
    title: "范围3",
    content: "Different people have different taste, and various types of music, Zimbali Resort.",
    cover: "images/course-demo.jpeg",
    team: [
      "示例子范围",
      "示例子范围",
      "示例子范围",
      "示例子范围",
      "示例子范围",
    ],
  },
] ;



export default {
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1'],
      courses,
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(o) {
      console.log('titleClick', o);
      this.$router.push({
        name:'article-detail',
        query:{
          group:o.group,
          subgroup:o.subGroup
        }
      })
    },
  },
};
</script>