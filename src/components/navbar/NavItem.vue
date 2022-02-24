<template>
<router-link :id="title" class="t4 px-05 no-deco quicksand fc-secondary" :to="link"></router-link>
    
</template>

<script>
import {type} from "@/assets/js/type"

export default {
    props: {
        title: String,
        link: String,
        color: {
            type: String,
            default: 'fc-secondary'
        },
        typeIn: {
            type: Boolean,
            default: true
        },
        position: Number
    },
    mounted() {
        if (this.typeIn) {
            let time = this.position * 800
            type(this.title , this.title , 100, {x: 0, y:0}, time, 'bold-name secondary', false)
        } else {
            document.getElementById(this.title).innerText = this.title
        }
    },

}
</script>

<style scoped>

a:hover {
    border-radius: 5px;
    background-color: rgba(235, 235, 235);
}


</style>