<template>
  <div class="navbar-height">
    <div id="nav" class="center" v-if="showNavbar">
      <NavItem title="Home" link="/" position="1" />
      <NavItem title="About" link="about" position="2" />
      <NavItem title="Resume" link="resume" position="3" />
      <NavItem title="Projects" link="projects" position="4" />
      <NavItem title="Contact" link="contact" position="5" />
    </div>

    <!-- Mobile Nav Drop Down -->
    <div id="nav" v-else>
      <b-button class="center-icon bg-dark br-2 p-1" @click="openNav">
        <i class="material-icons fc-light" style="font-size: 48px">menu</i>
      </b-button>

      <div id="myNav" class="overlay">
        <!-- Button to close the overlay navigation -->
        <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>

        <!-- Overlay content -->
        <div class="overlay-content">
          <NavItem title="Home" link="/" @click="closeNav()" />
          <NavItem title="About" link="about" @click="closeNav()" />
          <NavItem title="Resume" link="resume" @click="closeNav()" />
          <NavItem title="Projects" link="projects" @click="closeNav()" />
          <NavItem title="Contact" link="contact" @click="closeNav()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { fadeIn } from "@/assets/js/fade";
import NavItem from "@/components/navbar/NavItem.vue";

export default {
  name: "Navbar",
  components: { NavItem },
  computed: {
    showNavbar() {
      return window.screen.availWidth > 768;
    },
  },
  data() {
    return {};
  },
  mounted() {
    // fadeIn("nav", null, 1000, 30);
  },
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
  },
};
</script>

<style scoped>
.navbar-height { height: 50px; }

.center-icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.border-bottom {
  border-bottom: 2px solid rgba(186, 92, 18, 0.3);
}

/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #eeeeee;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>