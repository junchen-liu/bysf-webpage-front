<template>
  <a-layout>
    <a-layout-sider>
      <CoursePageSiderbar>
      </CoursePageSiderbar>
    </a-layout-sider>

    <a-layout-content>
      <a-card :bordered="false" class="header-solid h-full mb-24">
        <template #title>
          <h6 class="font-semibold" @click = "handleClick">{{$route.query.course}} - {{$route.query.subCourse}}</h6>
        </template>

        <a-row type="flex" :gutter="[24,24]" align="stretch">
          <!-- Article Column -->
          <a-col :span="24" :md="12" :xl="6" v-for="(project, index) in courses" :key="index">
            <CardProject
                :id="project.id"
                :title="project.title"
                :content="project.content"
                :cover="project.cover"
                :team="project.team"

            ></CardProject>
          </a-col>
          <!-- / Article Column -->

        </a-row>
      </a-card>
      <!-- Article Card -->
      <router-view></router-view>
      <!-- / Article Card -->
    </a-layout-content>
  </a-layout>
</template>


<script>

const courses = [
  {
    id: 1,
    title: "课程1",
    content: "As Uber works through a huge amount of internal management turmoil.",
    cover: "images/course-demo.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
  {
    id: 2,
    title: "课程2",
    content: "Music is something that every person has his or her own specific opinion about.",
    cover: "images/course-demo.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
  {
    id: 3,
    title: "课程3",
    content: "this is the most difficult course,so be careful to choose it.",
    cover: "images/course-demo.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
] ;
import CardProject from "@/components/Cards/CourseDetail";
import CoursePageSiderbar from "../../components/Sidebars/CoursePageSiderbar";
export default {
  name: "OthersArticleCard",
  props:['course','subCourse'],
  components :{
    // eslint-disable-next-line vue/no-unused-components
    CardProject,
    // eslint-disable-next-line vue/no-unused-components
    CoursePageSiderbar,
  },
  data() {
    return {
      // Project cards data
      courses,
    }
  },
  methods: {
    handleClick() {
      console.log(this.$route.query);
    },
  },
}
</script>

<style scoped>

</style>