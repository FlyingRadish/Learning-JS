<template lang="html">
  <div id="list">
    <mt-loadmore>
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
        <li class="article" v-for="(article, index) in articles" v-on:click="jumpTo(index)">
            <div class="title-pic">
              <img v-bind:src="article.pic_url" />
            </div>
            <div class="title-container">
              <div class="title">{{ article.time }}</div>
              <div class="sub-title">
                <div class="location">{{ article.location }}</div>
                <div class="topic">{{ article.topic }}</div>
              </div>
                </div>
            <div class="desc">{{ article.desc }}</div>
        </li>
      </ul>
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus == 'drop' }">↓</span>
         <span v-show="topStatus === 'loading'">
           <mt-spinner type="snake"></mt-spinner>
         </span>
      </div>
    </mt-loadmore>
    <div id="infinite_container" v-show="loading" class="infinite-container">
        <mt-spinner type="double-bounce"></mt-spinner>
    </div>
  </div>
</template>

<script>
import reqwest from 'reqwest'
var inspect = require('util').inspect;

export default {
  name: 'articleList',
  data() {
    return {
      loading: false,
      topStatus: '',
      hasNextPage: true,
      page: 0,
      articles: []
    }
  },
  methods: {
    fetchData(callback) {
      console.log('fetchData:', this.page);
      var conponent = this;
      reqwest({
        // url: 'http://raveboom.leanapp.cn/event?page=' + this.page,
        url: 'http://localhost:3000/event?page=' + this.page,
        type: 'json',
        method: 'get',
        error: function(err) {
          callback(err, undefined);
        },
        success: function(data) {
          conponent.hasNextPage = data._metadata.has_next_page;
          var articles = [];
          for (var i = 0; i < data.data.length; i++) {
            var item = data.data[i];
            var article = {
              link: item.url,
              pic_url: item.thumbnail,
              location: item.location,
              topic: item.name,
              desc: 'Line Up:' + item.lineUp
            };
            var startTime = new Date(item.startTime.iso)
            var time = startTime.getFullYear() + '.' + (startTime.getMonth() + 1) + '.' + startTime.getDate();
            if (item.endTime) {
              var endTime = new Date(item.endTime.iso);
              var endStr = endTime.getFullYear() + '.' + (endTime.getMonth() + 1) + '.' + endTime.getDate();
              if (time !== endStr) {
                time += '-' + endStr;
              }
            }
            article['time'] = time;
            articles.push(article);
          }
          callback(null, articles);
        }
      });
    },
    handleReloadChange(status) {
      this.topStatus = status;
    },
    reload() {
      var conponent = this;
      conponent.hasNextPage = true;
      this.page = 1;
      this.fetchData(function(err, data) {
        if (err) return;
        conponent.articles = data;
        conponent.$refs.pullToRefresh.onTopLoaded();
      });
    },
    loadMore() {
      if (!this.hasNextPage) {
        this.loading = false;
        return;
      }
      this.loading = true;
      this.page += 1;
      var conponent = this;
      this.fetchData(function functionName(err, data) {
        if (err) return;
        conponent.articles = conponent.articles.concat(data);
        conponent.loading = false;
      });
    },
    jumpTo(index) {
      location.href = this.articles[index].link;
    }
  }
}
</script>

<style lang="css" scoped>
li {
  list-style: none;
  padding: 0px;
}

ul {
  padding: 0px;
}

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

.infinite-container {
  text-align: center;
}

#infinite_container span {
  display: inline-block;
  vertical-align: middle;
}

.mint-loadmore-top span {
  display: inline-block;
  transition: .2s linear;
  vertical-align: middle;
}

.is-rotate {
  transform: rotate(180deg);
}
</style>
