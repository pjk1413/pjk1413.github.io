<template>
  <div @click="expand">
      <div  class="item-container" >
          <div :id="'description'+title" class="description bg-light">
              <div :id="'content'+title" class="dark content">
                  
                  </div>
              <div :id="'thumbnail'+title" class="thumbnail bg-secondary">
                  {{title}}
              </div>
        </div>
      </div>
  </div>
</template>

<script>
import { fadeIn } from "@/assets/js/fade"
export default {
    name: 'Item',
    props: {
        description: String,
        title: String
    },
    methods: {
        expand() {
            let thumbnail = document.getElementById("thumbnail"+this.title)
            let description = document.getElementById('description'+this.title)
            let content = document.getElementById('content'+this.title)
            
            if (thumbnail.style.width == '100%' || thumbnail.style.width == '') {
                thumbnail.style.width = '30%';
                thumbnail.style.height = '120px'
                description.style.height = '120px'
                description.style.padding = '10px'
                
                setTimeout(() => {
                    content.style.opacity = 0;
                    let thumbPos = thumbnail.getBoundingClientRect()
                    content.style.left = thumbPos.x + 5 + 'px'
                    content.style.display = 'block';
                }, 100)

                fadeIn('content'+this.title, this.description, 200, 10)
            } else {
                thumbnail.style.width = '100%';
                thumbnail.style.height = '30px'
                description.style.height = '40px'
                description.style.padding = '0px'
                content.style.display = 'none';
            }
            
        }
    }

}
</script>

<style scoped>

.thumbnail {
    border-radius: 5px;
    padding: 10px;
    transition-duration: 1s;
    width: 100%;
    height: 30px;
    color: white;
    font-weight: bold;
    font-size: 20px;
}

.thumbnail:hover {
    /* padding: 13px; */
    background-color: rgb(91, 198, 224)
}

.item-container {
    margin: 15px;
    transition-duration: 1s;
    cursor: pointer;
}

.description {
    position: relative;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    padding: 0px;
    color: white;
    font-weight: bold;
    font-size: 20px;
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