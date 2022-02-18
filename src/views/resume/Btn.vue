<template>
  <button :id="text" class="sk-bdg mx-1 ubuntu" @click="showDescription()">
    {{ text }} <span :id="text+description" class="description bg-light transition">{{description}}</span>
  </button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: String,
    description: String,
  },
  data() {
      return {
          defaultWidth: 0,
          show: true
      }
  },
  mounted() {
      this.setWidth()
  },
  methods: {
      setWidth() {  
          setTimeout(() => {
              let btn = document.getElementById(this.text)
              let btnDim = btn.getBoundingClientRect()
              this.defaultWidth = btnDim.width
              btn.style.width = btnDim.width + 'px'
          },100)
      },
    showDescription() {
        let btn = document.getElementById(this.text)
        let descr = document.getElementById(this.text+this.description)
        if (this.show) {
            btn.style.width = this.description.length*10 + 'px'
            descr.style.display = 'block'
        } else {
            btn.style.width = this.defaultWidth + 'px'
            descr.style.display = 'none'
        }
        
        this.show = !this.show
    },
  },
};
</script>

<style scoped>
.description {
    display: none;
}

.transition {
    transition-duration: 1s;
}

.sk-bdg {
  background-color: violet;
  border-radius: 3px;
  padding: 3px;
  margin-top: 5px;
  transition-duration: 1s;
}
</style>