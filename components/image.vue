<template lang="html">
<div
    v-lazy-container="{ selector: 'img' }"
    :class="`image-placeholder ${isRounded}`"
  >
    <img
      :data-src="imageRequired"
      :data-loading="imageRequired.placeholder"
      :width="width"
      :height="height"
      :class="classes"
      :alt="alt"
      @error.once="moveErrorImg($event)"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: {
      type: String,
    },
    alt: {
      type: String,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    classes: {
      type: String,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    imageRequired() {
      return require(`../assets/images/${this.imageURL}`);
    },
    moveErrorImg: function (event) {
      event.currentTarget.src = require("../assets/images/image-404.png?size=640");
    },
  },
  computed: {
    isRounded() {
      return this.rounded ? "image-placeholder--rounded" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.image-placeholder {
  overflow: hidden;
  line-height: 0;

  &--rounded {
    border-radius: 100%;
  }
}

img {
  transition: all ease 1s;
  opacity: 0;

  &[lazy="loading"] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy="loaded"] {
    opacity: 1;
  }
}
</style>
