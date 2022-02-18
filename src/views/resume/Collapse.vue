<template>
  <div class="p-2 custom-width mx-auto h-100">
    <div class="w-100">

      <button type="button" class="collapsible bg-white raleway secondary" @click="collapse">
        {{ titleText }}
      </button>

      <div :id="collapseKey + 'content'" class="content raleway dark custom-width ">
        <div :key="item" v-for="item in content" class="h-100">
            <div class="bottom-border">
                <h3 class="m-0 p-2">
                    <span class="w-50 left">{{item.title}}</span>
                    <span class="w-50 left font-small">&nbsp;&nbsp;<em>{{item.job}}</em></span>
                    <span class="primary align-right">{{item.date}}</span></h3>
            </div>
            
        <div class="left" v-if="item.body.length > 1 && type == 'list'">
            <ul>
                <li :key="line" v-for="line in item.body">{{line}}</li>
            </ul>
        </div>
        <div class="left" v-else-if="type == 'button'">
            <Btn :key="text" v-for="text in item.body" :text="text.split('|')[0]" :description="text.split('|')[1]"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {
    collapse() {
      let content = document.getElementById(this.collapseKey + "content");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    },
  },
};
</script>

<style scoped>
.align-right {
    float: right;
}

.font-small {
    font-size: 80%;
}

.bottom-border {
    border-bottom: 2px solid rgba(142, 202, 230);;
}

.custom-width {
    width: 80%;
}

/* Style the button that is used to open and close the collapsible content */
.collapsible {
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: 1px solid rgba(142, 202, 230);
  border-radius: 5px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  transition: max-height .5s ease-out;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.collapsible:hover {
  background-color: rgba(142, 202, 230);
  color: white;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 1s ease-out;
}
</style>