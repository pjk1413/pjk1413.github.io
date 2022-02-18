<template>
    <button class="link-button secondary no-padding" @click="navigateToLink()">
        <div id="grid-container" class="grid-container">
            <div class="grid-column bg-secondary light column-type">{{type}}</div>
            <div id="values" class="grid-column column-value">{{value}}</div>
        </div>
        </button>
</template>

<script>
export default {
    name: 'LinkButton',
    props: {
        type: String,
        value: String,
        link: String
    },
    data() {
        return {

        }
    },
    methods: {
        navigateToLink() {
            window.open(
              this.link, "_blank");
        },
        show() {
            let container = document.getElementById('grid-container')
            let values = document.getElementById("values")
            
            if (container.style.gridTemplateColumns == '100% 0%') {
                container.style.gridTemplateColumns = '40% 60%'
                values.classList.remove('hidden')
            } else {
                container.style.gridTemplateColumns = '100% 0%'
                values.classList.add('hidden')
            }
            

        }
    }
}
</script>

<style scoped>

.link-button:hover {
    /* padding: 5px; */
    background-color: rgba(2, 48, 71);
    color: white;
}

.link-button {
  cursor: pointer;
  /* padding: 10px; */
  width: 80%;
  border: 0px solid rgba(142, 202, 230);
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  transition: .5s;
  margin: 1px;
}

.link {
    text-decoration: none;
    text-align: center;
}

.grid-column {
    text-align: center;
    padding: 8px;
    transition: .5s;
}

.hidden {
    display: none;
}

.grid-container {
    display: grid;
    grid-template-columns: 40% 60%;
    transition: .5s;
}

.no-padding {
    padding: 0;
}

</style>