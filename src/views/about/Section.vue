<template>
  <div id="container" class="">
    <div class="h4 raleway">{{ title }}</div>
    <div class="fs-15 quicksand m-1" :key="text" v-for="text in body">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    title: String,
    body: String,
    img: String,
  },
};
</script>

<style scoped>

</style>