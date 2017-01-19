<template>
<div id="app">
  <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="pullToRefresh">
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <li v-for="(article, index) in articles" v-on:click="jumpTo(index)">
        <item :desc="article.desc" :time="article.time" :pic="article.pic_url" :location="article.location" :topic="article.topic"></item>
      </li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
    </div>
  </mt-loadmore>
  <p v-show="loading" class="page-infinite-loading">
    <mt-spinner type="fading-circle"></mt-spinner>
    加载中...
  </p>
</div>
</template>

<script>
import Item from './components/Item';
import reqwest from 'reqwest'
export default {
  name: 'app',
  components: {
    Item
  },
  data() {
    return {
      loading: false,
      topStatus: '',
      articles: [{
        time: '2017-1-7',
        location: '上海Myst',
        topic: 'Myst派对',
        pic_url: 'http://fj.people.com.cn/NMediaFile/2012/1213/LOCAL201212131737553215239638221.jpg',
        desc: '哈喽LINE UP: Diplo',
        link: 'https://www.google.com'
      }]
    }
  },
  methods: {
    fetch() {

    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadTop() {
      console.log('loadTop');
      setTimeout(() => {
        console.log('onTopLoaded');
        this.$refs.pullToRefresh.onTopLoaded();
      }, 1500);
    },
    loadMore() {
      console.log("hello");
      this.loading = true;
      setTimeout(() => {
        for (let i = 1; i <= 10; i++) {
          this.articles.push({
            time: '2017-1-7',
            location: '深圳蛇口价值工厂',
            topic: 'TRONICA',
            pic_url: 'http://3.im.guokr.com/gkimage/nm/03/ae/nm03ae.png',
            desc: '你好LINE UP: Yellow Claw/Slushii/Jewelz & Sparks',
            link: 'https://www.baidu.com'
          });
        }
        this.loading = false;
      }, 2500);
    },
    jumpTo: function(index) {
      location.href = this.articles[index].link;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app li {
  list-style: none;
  padding: 0px;
}

#app ul {
  padding: 0px;
}

#app .page-infinite-loading {
  text-align: center;
  height: 50px;
  line-height: 50px;
}

#app .page-infinite-loading div {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}

#app .mint-loadmore-top span {
  display: inline-block;
  transition: .2s linear;
  vertical-align: middle;
}

#app .mint-loadmore-top span @when rotate {
  transform: rotate(180deg);
}
</style>
