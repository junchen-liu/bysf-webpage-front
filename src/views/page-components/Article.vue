<template>
<div>
  <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      :title="title"
      :sub-title="time"
      @back="() => $router.go(-1)"
  >
    <a-descriptions size="small" :column="3">
      <a-descriptions-item label="">
        <VueMarkdown :source="value"></VueMarkdown>
      </a-descriptions-item>
    </a-descriptions>
  </a-page-header>
  <br />
</div>
</template>


<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VueMarkdown // 注入组件
  },
  data () {
    let MarkdownData="# bysf-front-cend\n" +
        "\n" +
        "## Project setup\n" +
        "```\n" +
        "npm install\n" +
        "```\n" +
        "\n" +
        "### Compiles and hot-reloads for development\n" +
        "```\n" +
        "npm run serve\n" +
        "```\n";
    return {
      value: MarkdownData , // value的值是要解析的markdown数据
      title: "这是文章 - "+this.$route.query.articleId+" - 号",
      time: "2001-2-3"
    }
  }
}
</script>





<!--<template>-->
<!--<div>-->
<!--  这是文章 - {{$route.query.articleId}} - 号-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "Article"-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->