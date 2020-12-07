<template>
  <header class="header">
    <headroom class="main-nav">
      <nav>
        <ul class="nav-links">
          <nuxt-link to="/" tag="li" class="nav-link" >
            <a hrel="section">
              <i class="fa fa-home fa-fw" aria-hidden="true"></i>首页
            </a>
          </nuxt-link>
          <nuxt-link to="/archive" tag="li" class="nav-link">
            <a>
              <i class="fa fa-book fa-fw" aria-hidden="true"></i>归档
            </a>
          </nuxt-link>
          <nuxt-link to="/" tag="li" class="nav-link">
            <a>
              <i class="fa fa-coffee fa-fw" aria-hidden="true"></i>日常
            </a>
          </nuxt-link>
          <nuxt-link to="/tags" tag="li" class="nav-link">
            <a>
              <i class="fa fa-camera fa-fw" aria-hidden="true"></i>标签
            </a>
          </nuxt-link>
          <nuxt-link to="/friend" tag="li" class="nav-link">
            <a>
              <i class="fa fa-mars fa-fw" aria-hidden="true"></i>小伙伴
            </a>
          </nuxt-link>
          <nuxt-link to="/about" tag="li" class="nav-link">
            <a>
              <i class="fa fa-user-circle-o fa-fw" aria-hidden="true"></i>关于我
            </a>
          </nuxt-link>
        </ul>
      </nav>
    </headroom>
  </header>
</template>

<script>
import { headroom } from "vue-headroom";

export default {
  data() {
    return {
      headerimg: require("assets/images/header-leg.jpg?size=1920")
    };
  },
  head() {
    return {
      link: [{rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.css'}]
    }
  },
  components: { headroom },
};
</script>

<style lang="scss">
.main-nav {
  position: absolute;
  width: 100%;
  z-index: 4;
  overflow: hidden;
  nav {
    box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  }
}

.nav-links {
  list-style: none;
  margin-top: 0;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%;
  width: 68rem;
}

.nav-link {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 3.35rem;
  position: relative;
  margin: 0 0.5rem 0 0.5rem;
}

.nav-link.nuxt-link-exact-active {
  border-bottom: inherit;
}

.nav-link a {
  text-decoration: none;
  color: inherit;
  font-weight: 350;
  font-size: 0.8rem;
  line-height: inherit;
  padding: 0 0.7rem;
}

.nav-link a:hover,
.nav-link a:active {
  background: rgba(0, 190, 255, 0.8);
}
</style>

<style lang="scss" scoped>
nav {
  backdrop-filter: blur(0.3rem);
  -webkit-backdrop-filter: blur(0.3rem);
  background-color: rgba(255, 255, 255, 0.7);
  height: 3.25rem;
}

.fa {
  margin-right: 0.2rem;
}
</style>
