<template>
<Navbar />
  <router-view/>
</template>

<script>
import '@/assets/css/_portfolio.css'
import Navbar from '@/components/navbar/Navbar.vue'


 export default {
   name: 'App',
   components: { Navbar }
 }
</script>


<style>

</style>
