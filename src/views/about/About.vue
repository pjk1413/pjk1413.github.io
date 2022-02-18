<template>
<div>
  <div class="container">
      <div class="center">
        <h1 id="heading" class="bolder raleway heading dark"></h1>
      </div>
    </div>
  <div>

  </div>
</div>

</template>

<script>
import {type} from "@/assets/js/type"

export default {
    name: 'About',
    mounted() {
      type('heading','About', 100, {x: 0, y:0}, 50, 'bold-name dark', false)
    }

}
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

#dropdown {
  position: absolute;
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


</style>
