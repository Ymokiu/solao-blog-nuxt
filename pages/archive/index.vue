<template>
  <main class="main-inner">
    <div class="content">
      <section>
        <div class="archive" v-for="item in times" :key="item.time">
          <div class="arc-title">{{ item.time }}</div>
          <ul class="arc-ul">
            <nuxt-link :to="'archive/'+ list.id" v-for="list in item.archives" :key="list.id">
              <li class="arc-li">
                <span class="arc-span">{{ list.title }}</span>
              </li>
            </nuxt-link>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import moment from "moment";

export default {
  async asyncData() {
    const resolve = await require.context("~/content/archive", true, /\.md$/);
    let imports = resolve.keys().map(key => resolve(key));
    imports.sort((a, b) =>
      moment(b.attributes.year, "YYYY/MM/DD,H").diff(
        moment(a.attributes.year, "YYYY/MM/DD,H")
      )
    ); //时间排序

    imports.forEach(item => {
      item.attributes.year = moment(
        item.attributes.year,
        "YYYY/MM/DD,h",
        "en"
      ).toISOString();
    }); //格式化时间

    return {
      posts: imports.map(imports => {
        return {
          id: imports.attributes.id,
          title: imports.attributes.title,
          time: imports.attributes.year
        };
      })
    };
  },
  computed: {
    times() {
      let attr = [];
      let year = this.posts;

      year.forEach(item => {
        let year = moment(item.time).format("YYYY");
        attr.push(Object.assign({}, item, { year: year }));
      });

      var obj = {};
      for (var i in attr) {
        if (!obj.hasOwnProperty(attr[i]["year"])) obj[attr[i]["year"]] = [];
        obj[attr[i]["year"]].push(attr[i]);
      }
      var keyArr = Object.keys(obj).sort();
      var result = [];
      for (var i in keyArr) {
        result.push({
          time: keyArr[i],
          archives: obj[keyArr[i]]
        });
      }
      result.sort((a, b) =>
        moment(b.time, "YYYY").diff(moment(a.time, "YYYY"))
      ); //时间排序

      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.archive {
  width: 100%;
}
</style>
