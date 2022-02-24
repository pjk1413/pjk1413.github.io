<template>
  <div @click="expand">
    <div class="item-container p-1">
      <div :id="'description' + title" class="description bg-light br-3 w-100">
        <div :id="'content' + title" class="fc-dark content"></div>
        <div :id="'content' + company" class="fc-dark content"></div>
        <div :id="'content' + title + 'tech'" class="fc-dark content"></div>
        <div
          :id="'thumbnail' + title"
          class="thumbnail bg-secondary fc-white fs-3 p-05 br-3 w-100"
        >
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fadeIn } from "@/assets/js/fade";
export default {
  name: "Item",
  props: {
    description: String,
    title: String,
    company: String,
    tech: Array,
  },
  computed: {
    smallScreen() {
      return window.screen.availWidth < 768;
    },
  },
  methods: {
    buildContent() {
      let buttons = "";

      this.tech.forEach((t) => {
        buttons += `<button class="border-solid br-4 bg-warning fc-dark bc-warning mx-02">${t}</button>`;
      });

      let content = `
            <div>
                <div class="">${this.description}</div>
                <div class="italic p-05">${this.company}</div>
                <div class=" pt-05">
                    ${buttons}
                </div>
            </div>
            `;
      return content;
    },
    expand() {
      let thumbnail = document.getElementById("thumbnail" + this.title);
      let description = document.getElementById("description" + this.title);
      let content = document.getElementById("content" + this.title);

      if (this.smallScreen) {
        if (content.style.display == 'none' || content.style.display == undefined) {
          description.style.height = "120px";
          description.style.padding = "5px";
          let thumbPos = thumbnail.getBoundingClientRect();
          content.style.left = thumbPos.x - 14 - 16 + "px";
          setTimeout(() => {
            content.style.padding = '5px'
            content.style.display = "block";
            console.log(thumbnail.style)
            // let extraHeight = thumbPos.height - (thumbnail.style.padding * 2) - (thumbnail.style.borderWidth * 2)
            content.style.top = thumbPos.height + 5 + 'px'
            content.style.opacity = 0;
            
            
            description.style.height = description.scrollHeight + "px";
          }, 400);

          fadeIn("content" + this.title, this.buildContent(), 200, 5);
        } else {

          thumbnail.style.height = "30px";
          description.style.height = "40px";
          description.style.padding = "0px";
          content.style.display = "none";
        }
      } else {
        if (thumbnail.style.width == "100%" || thumbnail.style.width == "") {
          thumbnail.style.width = "30%";
          thumbnail.style.height = "120px";
          description.style.height = "120px";
          description.style.padding = "10px";

          let thumbnailWidthPercent =
            parseInt(thumbnail.style.width.replace("%", "")) - 10;
          setTimeout(() => {
            content.style.opacity = 0;
            let thumbPos = thumbnail.getBoundingClientRect();
            content.style.left =
              thumbPos.x +
              thumbPos.width * (thumbnailWidthPercent / 100) +
              "px";
            content.style.maxWidth = thumbPos.width + "px";
            content.style.display = "block";
          }, 200);

          setTimeout(() => {
            description.style.height = description.scrollHeight + "px";
          }, 400);
          fadeIn("content" + this.title, this.buildContent(), 200, 5);
        } else {
          thumbnail.style.width = "100%";
          thumbnail.style.height = "30px";
          description.style.height = "40px";
          description.style.padding = "0px";
          content.style.display = "none";
        }
      }
    },
  },
};
</script>

<style scoped>
.thumbnail {
  transition-duration: 1s;
  height: 30px;
}

.thumbnail:hover {
  background-color: var(--primary);
}

.item-container {
  transition-duration: 1s;
  cursor: pointer;
}

.description {
  position: relative;
  height: 40px;
  transition-duration: 1s;
}

.content {
  position: absolute;
  display: none;
  top: 8px;
  left: 220px;
  transition-duration: 1s;
}
</style>