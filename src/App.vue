<template>
<Navbar />
  <router-view/>
</template>

<script>
import '@/assets/css/portfolio.css'
import Navbar from '@/components/navbar/Navbar.vue'


 export default {
   name: 'App',
   components: { Navbar }
 }
</script>


<style>
/* body {
  overflow-y: hidden; 
  overflow-x: hidden;
} */

</style>
