<template>
    <div :id="`${squareId}`" class="square bg-dark" :style="`top: ${y}px; left:${x}px;`"></div>
</template>

<script>
export default {
  name: "Square",
  props: {
    squareId: Number,
    x: Number,
    y: Number,
  },
  data() {
      return {
          speed: 1,
          intervalId: null,
          square: null,
      }
  },
  mounted() {

    this.move()

  },
  methods: {
      move() {
          this.speed = this.getRandomInt(1,5)
          let square = document.getElementById(this.squareId)
          this.intervalId = setInterval(frame, 10)
          function frame() {
            let x = square.getBoundingClientRect().x
            let y = square.getBoundingClientRect().y
            if (x > screen.width) {
                square.style.left = `${0}px`
            } else {
                square.style.left = `${x + 1.5}px`
            }

            if (y > screen.height) {
                square.style.top = `${0}px`
            } else {
                square.style.top = `${y + 1}px`
            }
        }
      },
      getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
      
  },
};
</script>

<style scoped>
.square {
  position: absolute;
  height: 5px;
  width: 5px;
}
</style>