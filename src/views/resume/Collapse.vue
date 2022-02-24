<template>

  <div class="mx-auto">
    <div>
      <button id="title-text" type="button" class="left br-3 bc-primary bw-1 border-solid w-100 collapsible bg-white raleway fc-secondary fs-15 p-1 m-05" @click="collapse">
        {{ titleText }}
      </button>
      
      <div :id="collapseKey + 'content'" class="content raleway fc-dark">
        <div  :id="item.title" :key="item" v-for="item in content" class="body-hover br-3 p-1 content-container w-90">
            <div :id="item.title + 'title'" class="bottom-border" v-if="!smallScreen" @click="showDropdown(item.title + 'dropdown')">
                      <h3 class="m-0 p-0 fs-15 w-100 pointer">
                      <span class="w-50 fw-5">{{item.title}}</span>
                    
                    <span class="w-50 left fw-2 fs-1 media-job">&nbsp;&nbsp;<em>{{item.job}}</em></span>
                    

                    <span class="fc-primary float-right media-date">{{item.date}}</span>
                    </h3>
                    <div :id="item.title + 'dropdown'" class="dropdown-content">
              <a class="p-05" :href="link.link" :key="link.name" v-for="link in item.links" target="_blank">{{link.name}}</a>
            </div>
            </div>
            <div v-else>
            <div @click="showDropdown(item.title + 'dropdown')">
              <span class="fs-2 fw-5">{{item.title}}</span>
            </div>
            <div :id="item.title + 'dropdown'" class="dropdown-content">
              <a class="p-05" :href="link.link" :key="link.name" v-for="link in item.links" target="_blank">{{link.name}}</a>
            </div>
              <div>
                <span class="fc-secondary">{{item.job}}</span>
              </div>
              <div>
                <span class="fc-secondary">{{item.date}}</span>
              </div>
            </div>

            

        <div v-if="!smallScreen">
          <div class="left quicksand" v-if="item.body.length > 1 && type == 'list'">
            <ul class="">
                <li class="" :id="line" :key="line" v-for="line in item.body" v-html="line"></li>
            </ul>
          </div>
          <div class="left" v-else-if="type == 'button'">
            <Btn :key="text" v-for="text in item.body" :text="text.split('|')[0]" :description="text.split('|')[1]"/>
            </div>
        </div>


        <div v-else>
          <div class="" v-if="item.body.length > 1 && type == 'list'">
            <button @click="(e) => toggleText(e, line)" class="fc-dark left raleway w-100 p-05 br-1 bc-primary bw-1 m-01 bg-white fc-secondary border-solid" :key="line" v-for="line in item.body">
              {{line.substring(0,40)}}...
            </button>
          </div>
          <div class="left" v-else-if="type == 'button'">
            <Btn :key="text" v-for="text in item.body" :text="text.split('|')[0]" :description="text.split('|')[1]"/>
            </div>
        </div>

        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// import { thumbnail } from '@/assets/js/thumbnail'
import Btn from './Btn.vue';
export default {
  components: { Btn },
  name: "Collapse",
  props: {
    collapseKey: String,
    titleText: String,
    content: Array,
    type: String
  },
  computed: {
    smallScreen() {
      return window.screen.availWidth < 768;
    },
  },
  mounted() {


    
  },
  methods: {
    toggleText(e, text) {
      if (e.target.innerText == text) {
        e.target.innerText = text.substring(0, 35) + '...'
      } else {
        e.target.innerText = text
      }
    },
    formatDate(date) {
      console.log(date)
      return '2020'
    },
    showDropdown(id) {
      document.getElementById(id).classList.toggle("show");
    },
    collapse() {
      let content = document.getElementById(this.collapseKey + "content");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.height = content.scrollHeight + 30 + "px";
        content.style.maxHeight = content.scrollHeight + 30 + "px";
      }
    },
  },
};
</script>

<style scoped>
.bottom-border {
    border-bottom: 2px solid rgba(142, 202, 230);;
}


/* Style the button that is used to open and close the collapsible content */
.collapsible {
  cursor: pointer;
  transition: max-height .5s ease-out;
  transition-duration: .5s;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.collapsible:hover {
  transition-duration: .5s;
  font-weight: 800;
  background-color: var(--primary);
  color: white;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s ease-out;
}

.content-container {
  margin-top: 5px;
}

.body-hover {
  border-radius: 5px;
}

.body-hover:hover {
  border: .5px solid rgba(235, 235, 235);
  box-shadow: 10px 10px 8px rgba(142, 202, 230, .3);
  border-radius: 5px;
  transition-duration: .3s;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 10;
  border-radius: 5px;
}

.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  transition-duration: .3s;
  background-color: #ddd;
}

.show {
  display: block;
  }
</style>