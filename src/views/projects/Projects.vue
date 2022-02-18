<template>
  <div class="container">
    <div class="center">
      <h1 id="heading" class="bolder raleway heading dark"></h1>
    </div>
  </div>
  <div class="outer-spacing">
    <div class="raleway secondary">
  
      <Item title="Data Catalog Interface" description="A small Flask server designed to serve static content, schedule and run periodic update scripts, keep a robust log of all changes and actions and assist in the management of user access. <em>Spectrum 2022</em>" />

      <Item title="LOGMOD" description="An Air Force web application designed to assist the airforce in loading/unloading and scheduling of airplanes.  Updated outdated backend pieces and updated front end to utilize Vue.js. <em>US Air Force 2021</em>" />

      <Item title="Gradely" description="A Spring web application with a React front end built to assist parents, teachers, students and admins to better keep in communication and track student progress throughout the school year.  <em>Capstone Project 2020</em>" />

      <!-- <iframe src="http://brython.info/console.html" width="800px" height="400px"></iframe> -->
      

    </div>
  </div>
</template>

<script>
import { type } from "@/assets/js/type";
import Item from "./Item.vue";


export default {
  components: { Item },
  name: "Projects",
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
  methods: {

  }
};
</script>

<style scoped>
@media screen and (max-width: 400px) {
  .heading {
    font-size: 300%;
    /* opacity: 0; */
  }
}

@media screen and (min-width: 401px) {
  .heading {
    font-size: 500%;
    /* opacity: 0; */
  }
}

.container {
  z-index: -1;
  height: 20vh;
  position: relative;
  /* border: 3px solid green; */
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 30%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.grid-container {
  display: grid;
  gap: 10px;
  padding: 10px;
}


.outer-spacing {
    margin-left: 20%;
    margin-right: 20%;
}

</style>