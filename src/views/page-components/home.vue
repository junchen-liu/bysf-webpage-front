<!--首页-->
<template>
  <div>
    <!-- Projects Card -->
    <a-card :bordered="false" class="header-solid h-full mb-24" :bodyStyle="{paddingTop: '14px'}">
      <template #title>
        <h6 class="font-semibold">专业必修课</h6>
      </template>

      <a-row type="flex" :gutter="[24,24]" align="stretch">

        <!-- Project Column -->
        <a-col :span="24" :md="12" :xl="6" v-for="(project, index) in courses" :key="index">
          <CardProject
              :id="project.id"
              :title="project.title"
              :content="project.content"
              :cover="project.cover"
              :team="project.team"
          ></CardProject>
        </a-col>
        <!-- / Project Column -->

      </a-row>
    </a-card>
    <!-- / Projects Card -->

  </div>
</template>

<script>
// mock data for courses card

import CardProject from "@/components/Cards/CardProject";

const courses = [
  {
    id: 1,
    title: "Modern",
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
    title: "Scandinavian",
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
    title: "Minimalist",
    content: "Different people have different taste, and various types of music, Zimbali Resort.",
    cover: "images/course-demo.jpeg",
    team: [
      "images/face-1.jpg",
      "images/face-4.jpg",
      "images/face-2.jpg",
      "images/face-3.jpg",
    ],
  },
] ;

export default {
  name: "home",
  components: {
    CardProject,
  },
  data() {
    return {
      // Project cards data
      courses,
    }
  },
}
</script>

<style scoped>

</style>