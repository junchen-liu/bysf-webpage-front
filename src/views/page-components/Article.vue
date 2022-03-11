<template>
<div>
  这是文章 - {{$route.query.articleId}} - 号
  <VueMarkdown :source="value"></VueMarkdown>
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
      value: MarkdownData // value的值是要解析的markdown数据
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