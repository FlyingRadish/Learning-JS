<template>
<div class="article">
  <div class="title-pic">
    <img v-bind:src="pic" />
  </div>
  <div class="title-container">
    <div class="title">{{ time }}</div>
    <div class="sub-title">
      <div class="location">{{ location }}</div>
      <div class="topic">{{ topic }}</div>
    </div>
  </div>
  <div class="desc">{{ desc }}</div>
</div>
</template>

<script>
export default {
  name: 'item',
  props: ['link', 'pic', 'time', 'location', 'topic', 'desc']
}
</script>

<style scoped>
.article {
  position: relative;
  list-style: none;
  margin-bottom: 1rem;
  background: white;
  padding: 8px;
  border-radius: 2px;
  box-shadow: 1px 1px 8px #9E9E9E;
}

.article .title {
  font-family: "Oswald", "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  font-size: 2.6em;
  color: white;
}

.article .title-container {
  position: absolute;
  top: 20px;
  left: 20px;
}

.article .title-pic {
  width: 100%;
  height: 12rem;
  overflow: hidden;
}

.article .title-pic img {
  width: 100%;
}

.article .desc {
  font-family: "Oswald", "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  line-height: 1.2;
  font-size: 1.6rem;
  font-weight: bold;
  text-shadow: 0px 3px 0px rgba(0, 216, 255, 0.5), 3px 0px 0px rgba(255, 0, 246, 0.5);
}

.article .sub-title {
  font-size: 1.33rem;
}

.article .location {
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  color: rgb(7, 60, 255);
  float: left;
  background-color: white;
  color: black;
  height: 1.8rem;
  line-height: 1.8rem;
  border: 0.3rem solid white;
  padding: 0rem 0.55rem 0rem 0.55rem;
}

.article .topic {
  font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
  color: rgb(7, 60, 255);
  float: left;
  color: white;
  height: 1.8rem;
  line-height: 1.8rem;
  border: 0.3rem solid white;
  padding: 0rem 0.55rem 0rem 0.55rem;
}
</style>
