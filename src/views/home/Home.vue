<template>
  <div>
    <div class="media-space-medium">
      <div class="container">
        <div class="center">
          <h1 id="heading" class="raleway dark h m-1">Welcome</h1>
        </div>
      </div>
    </div>

    <div id="type1" class="quicksand fc-primary center h5"></div>
    <div id="type2" class="quicksand fc-primary center h5"></div>
  </div>
</template>

<script>
import { type } from "@/assets/js/type";
import { fadeIn } from "@/assets/js/fade";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      squares: [],
    };
  },
  mounted() {
    let yCenter = window.innerHeight / 2;
    fadeIn("heading", "Welcome", 0, 10);

    type(
      "type1",
      "My name is ^Patrick Kramer",
      100,
      { x: 0, y: yCenter },
      1000,
      "fw-5 fc-dark",
      false
    );

    type(
      "type2",
      "I'm a ^software developer",
      100,
      { x: 0, y: yCenter + 60 },
      4000,
      "fw-4 fc-secondary ubuntu",
      true
    );
  },
  methods: {},
};
</script>

<style>
.container {
  position: relative;
}


</style>
