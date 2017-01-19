<template>
<div id="app">
  <article-list></article-list>
</div>
</template>

<script>
import ArticleList from './components/ArticleList';
export default {
  name: 'app',
  components: {
    ArticleList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
