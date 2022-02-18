<template>
  <div>
    <!-- <div id="square" class="bg-warning square" style="top: 0px; left: 200px;"></div> -->
    <Welcome />
    <div id='type1' class="bolder quicksand primary type"></div>
    <div id='type2' class="bolder quicksand primary type"></div>
    
  </div>
</template>

<script>
// import {dropdown} from "@/assets/js/drop"
import {type} from "@/assets/js/type"
import Welcome from '@/views/home/Welcome.vue'


export default {
  name: 'Home',
  components: {
    Welcome,
  },
  data() {
    return {
      squares: []
    }
  },
  mounted() {
    let yCenter = window.innerHeight/2

    type('type1','My name is ^Patrick Kramer', 100, {x: 0, y:yCenter}, 1000, 'bold-name dark', false)
    type('type2', "I'm a ^software developer", 100, {x: 0, y: yCenter+ 60}, 4000, 'bold-name-small secondary ubuntu', true)
  },
  methods: {

  }
}
</script>

<style>
@media screen and (max-width: 400px) {
  .type {
  text-align: center;
  font-size: 150%;
  width: 100%;
}

}

@media screen and (min-width: 401px) {
.type {
  text-align: center;
  font-size: 300%;
  width: 100%;
}

}

.bold-name-small {
  font-size: 110%;
}

.bold-name {
  font-size: 120%;
  font-weight: bolder;
}



</style>
