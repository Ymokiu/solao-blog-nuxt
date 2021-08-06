<template>
  <main class="main-inner">
    <div class="content-wrap">
      <p v-for="i in idPages" :key="i.meta">
        {{ i.meta }}
      </p>
      <section class="archive-wrap">
        <PostPreview
          v-for="post in postsPage"
          :key="post.id"
          :title="post.title"
          :id="post.id"
          :date="post.date"
          :html="post.html"
          :description="post.description"
        />
      </section>
    </div>
    <aside class="aside-wrap"></aside>
  </main>
</template>

<script>
import moment from "moment";
import dayjs from "dayjs";
import PostPreview from "@/components/PostPreview";
var minMax = require("dayjs/plugin/minMax");
dayjs.extend(minMax);

export default {
  async asyncData() {
    const resolve = await require.context("~/content/archive", true, /\.md$/);
    let imports = resolve.keys().map((key) => resolve(key));

    // console.log(imports)
    // sort by year
    // imports.sort((a, b) =>
    //   moment(b.attributes.year, "YYYY/MM/DD,H").diff(
    //     moment(a.attributes.year, "YYYY/MM/DD,H")
    //   )
    // );
    imports.forEach((item) => {
      item.attributes.year = dayjs(item.attributes.year).format("DD/MM/YYYY");
    });
    console.log(imports);
    return {
      posts: imports.map((imports) => {
        return {
          id: imports.attributes.id,
          title: imports.attributes.title,
          date: imports.attributes.year,
          description: imports.attributes.description,
          html: imports.attributes.html,
          url: imports.vue.render.FunctionLocation,
          meta: imports.meta.resourcePath,
        };
      }),
    };
  },
  components: {
    PostPreview,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    postsPage() {
      const offset = this.currentPage - 1;
      return this.posts.slice(7 * offset, 7 * this.currentPage);
    },
    maxPages() {
      return Math.ceil(this.posts.length / 7);
    },
    idPages() {
      // let str = this.posts;
      // str = match(
      //   /[A-Za-z0-9][-A-Za-z0-9]+\.[md]{2,2}/g
      //   // /[A-Za-z0-9][-A-Za-z0-9]+\.[md]{2,2}/g
      // );
      // return str;
      // let tempArr = [];
      // for(let i in data){
      //   return tempArr.push({archive: [tempArr[i]]})
      // }
      // let attr = [];
      // for (let i in data) {
      //   var pattern = /\.{1}[md]{1,}/;
      //   return attr.push(data.meta[i].slice(0, pattern.exec(data.meta[i]).index));
      // }
    },
  },
  methods: {
    nextPage() {},
  },
};
</script>

<style lang="scss">
.main-inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  padding-top: 70px;
}

.aside-wrap {
  position: sticky;
  margin-top: 1.2rem;
  width: 15rem;
}

.content-wrap {
  overflow: hidden;
  width: 100%;
  padding: 0 16px;
  max-width: 1000px;
  width: 772px;
  padding: 2.5rem;
  padding-top: 1.2rem;
  padding-bottom: 0;
  display: grid;
  grid-template-areas: "postList";
  grid-template-columns: 1fr;
  grid-column-gap: 24px;
}

.archive-wrap {
  position: relative;
  padding: 40px;
  margin-bottom: 40px;
  border-radius: 5px;
}
</style>
