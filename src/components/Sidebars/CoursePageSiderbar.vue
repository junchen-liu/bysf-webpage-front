<template>
  <div>
    <a-menu
        :default-selected-keys="['1']"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick">
      <a-sub-menu v-for="(course, index) in courses" :key="index">
        <span slot="title"><a-icon type="mail" /><span>{{course.title}}</span></span>
        <a-menu-item v-for="(subCourse, subIdx) in course.team" :key="subIdx" @click="titleClick({course:course.title,subCourse:subCourse},$event)">
          {{subCourse}}
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
    title: "七模",
    content: "artist",
    cover: "images/course-demo.jpeg",
    team: [
      "艺术",
      "自然科学",
    ],
  },
  {
    id: 2,
    title: "专业选修",
    content: "select",
    cover: "images/course-demo.jpeg",
    team: [
      "三创",
      "理论",
      "自然科学与健康"
    ],
  },
  {
    id: 3,
    title: "专业必修",
    content: "Different people have different taste, and various types of music, Zimbali Resort.",
    cover: "images/course-demo.jpeg",
    team: [
      "示例子范围"
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
        name:'course-card',
        query:{
          course:o.course,
          subCourse:o.subCourse
        }
      })
    },
  },
};
</script>