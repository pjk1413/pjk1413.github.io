<template>
  <div class="media-space-small">
    <div class="container">
      <div class="left pl-3 media-title-left">
        <h1 id="heading" class="raleway dark h2 m-0"></h1>
      </div>
    </div>

    <div class="media-about-width mx-auto">
      <Section :key="section.title" v-for="section in about" :title="section.title" :body="section.body" />
    </div>
  </div>
</template>

<script>
import { about } from "@/views/about/aboutData"
import { type } from "@/assets/js/type";
import Section from './Section.vue';

export default {
  components: { Section },
  name: "About",
  data() {
    return {
      about: about
    }
  },
  mounted() {
    type("heading", "About", 100, { x: 0, y: 0 }, 50, "bold-name dark", false);
  },
};
</script>

<style scoped>

</style>
