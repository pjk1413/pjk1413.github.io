<template>
    <button class="w-75 border-solid br-2 bw-4 bc-light m-05 p-0 hover-dark" @click="navigateToLink()">
        <div id="grid-container" class="grid-container">
            <div class="ubuntu fs-15 grid-column bg-secondary br-2 fc-white hover-light">{{type}}</div>
            <div id="values" class="raleway fw-3 grid-column fc-dark hover-dark">{{value}}</div>
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

.link {
    text-decoration: none;
    text-align: center;
}

.grid-column {
    text-align: center;
    padding: 8px;
    transition: .4s;
}

.hidden {
    display: none;
}

.grid-container {
    display: grid;
    grid-template-columns: 40% 60%;
    transition: .4s;
}

.no-padding {
    padding: 0;
}

</style>