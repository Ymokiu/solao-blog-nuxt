<template>
  <article class="posts-preview wow animate__fadeIn" data-wow-duration="1s" data-wow-offset="-10">
    <div class="wrap-content">
      <div class="wrap-title">
        <nuxt-link
          :to="'archive/'+ id"
          class="title-link el-link el-link--primary is-underline"
        >{{title}}</nuxt-link>
      </div>
      <div class="wrap-date">
        <nuxt-link
          :to="'archive/'+ id"
          class="date-time el-icon-date el-link el-link--info is-underline one-pan-link-mark"
        >{{times}}</nuxt-link>
      </div>
      <div class="wrap-text">{{description}}</div>
      <div class="wrap-button">
        <nuxt-link :to="'archive/'+ id">
          <el-button size="small" type="success" round class="button-link ">阅读更多<span class="el-icon-arrow-right
"></span></el-button>
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}
import moment from "moment";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    meta: {
      type: Array
    },
    description: {
      type: String
    },
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    times() {
      let dates = moment(this.date, "YYYY/MM/DD", "en").toISOString();
      return moment(dates).format("YYYY-MM-DD");
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (process.browser) {
        // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({
          live: false,
          offset: 0
        }).init();
      }
    });
  }
};
</script>

<style lang="scss">
.posts-preview {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: block;
  padding: 16px;
  margin-bottom: 42px;
  background-color: #fff;
  overflow: hidden;
  border-radius: 4px;
  min-height: 230px;
}

.wrap-content {
  min-height: 216px;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
  }
  .wrap-title {
     flex: 0;
    .title-link {
      font-size: 19px;
      margin-bottom: 16px;
      line-height: 28px;
      font-weight: 700;
    }
  }
  .wrap-date {
     flex: 0;
    margin-bottom: 12px;
  }
  .wrap-text {
    padding: 16px;
    overflow: auto;
    font-size: 15px;
  }
  .wrap-button {
    padding: 5px 0 5px 0;
    text-align: center;
    flex: 0;
    .one-pan-link-mark {
      width: auto;
    }
  }
}
</style>
