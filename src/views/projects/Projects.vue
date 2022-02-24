<template>
<div class="media-space-small">
  <div class="container">
    <div class="center-left">
      <h1 id="heading" class="raleway fc-dark h2 m-0"></h1>
    </div>
  </div>
  <div class="w-75 mx-auto">
    <div class="raleway fc-secondary">
      <Item :key="project.title" v-for="project in projects" :title="project.title" :description="project.description" :tech="project.tech" :company="project.company"/>

    </div>
  </div>
  </div>
</template>

<script>
import { projects } from "@/views/projects/projects"
import { type } from "@/assets/js/type";
import Item from "./Item.vue";

export default {
  components: { Item },
  name: "Projects",
  data() {
    return {
      projects: projects,
    }
  },
  mounted() {
    type(
      "heading",
      "Projects",
      100,
      { x: 0, y: 0 },
      50,
      "bold-name dark",
      false
    );
  },
  methods: {},
};
</script>

<style scoped>

.grid-container {
  display: grid;
  gap: 10px;
  padding: 10px;
}
</style>