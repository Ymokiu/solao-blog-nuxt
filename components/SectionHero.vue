<template>
  <div class="shape">
    <span class="span-150"></span>
    <span class="span-50"></span>
    <span class="span-50"></span>
    <span class="span-75"></span>
    <span class="span-100"></span>
    <span class="span-75"></span>
    <span class="span-50"></span>
    <span class="span-100"></span>
    <span class="span-50"></span>
    <span class="span-100"></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.shape {
  width: 100%;
  height: 100%;
}

.span-150 {
  width: 150px;
  height: 150px;
  top: 70%;
  left: 4%;
}

.span-100 {
  width: 100px;
  height: 100px;
  top: 40px;
  left: 40px;
  top: 70%;
  right: 5%;
}

.span-75 {
  width: 75px;
  height: 75px;
  top: 40px;
  left: 40px;
}

.span-50 {
  width: 50px;
  height: 50px;
  top: 40px;
  left: 40px;
}
</style>

<style scoped>
span {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
