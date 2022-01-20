<template>
  <div>
<!--    <router-link class="go-to-test" to="/test">TEST</router-link>-->
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

export default ({
  name:'App',
  components:{
  },
  computed: {
    // Sets components name based on current route's specified layout, defaults to
    // <layout-default></layout-default> component.
    layout() {
      return "layout-" + ( this.$route.meta.layout || "default" ).toLowerCase() ;
    }
  },
})

</script>
