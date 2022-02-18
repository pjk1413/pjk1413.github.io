<template>
  <div>
    <div class="container" v-if="showHeading">
      <div class="center">
        <h1 id="heading" class="bolder raleway heading dark">Welcome</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { fadeIn } from "@/assets/js/fade";

export default {
  name: "Welcome",
  data() {
    return {
      showHeading: true,
      showDropdown: false,
      messageId: 0,
      messages: ["Welcome"],
      opacity: 0,
      heading: null,
      dropdown: null,
      intervalId: null,
    };
  },
  mounted() {
    fadeIn("heading", "Welcome", 0, 10);
  },
  methods: {},
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  .heading {
    font-size: 300%;
    opacity: 0;
  }
}

@media screen and (min-width: 401px) {
.heading {
    font-size: 500%;
    opacity: 0;
    }
}

#dropdown {
  position: absolute;
}



.container {
  height: 50vh;
  position: relative;
  /* border: 3px solid green; */
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>