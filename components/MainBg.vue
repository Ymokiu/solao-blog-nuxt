<template>
  <div class="cover">
    <div class="cover-background banner">
      <Hero />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/SectionHero";

export default {
  components: { Hero },
};
</script>

<style>
:root {
  --main-bg-image: url(../assets/images/header-leg.jpg?size=1920) center center /
    cover no-repeat fixed;

  --phone-bg-image: url(../assets/images/header-leg.jpg?size=1920) center center /
    cover no-repeat fixed;
}

.banner:before {
  background-image: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/grid.png);
}

.banner:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  background-attachment: fixed;
}

.cover-background {
  background: var(--main-bg-image);
  height: 100%;
  width: 100%;
  overflow: hidden;
}

@media (max-width: 678px) {
  .cover-background {
    background: var(--phone-bg-image);
  }
}

.cover {
  width: 100%;
  height: 100vh;
}
</style>
