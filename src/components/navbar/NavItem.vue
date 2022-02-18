<template>
<router-link :id="title" :class="`quicksand nav-link bolder mx-4 ${color}`" :to="link"></router-link>
    
</template>

<script>
import {type} from "@/assets/js/type"

export default {
    props: {
        title: String,
        link: String,
        color: {
            type: String,
            default: 'secondary'
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

@media screen and (min-width: 401px) {
.nav-link {
    padding: 4px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 5px;
    font-size: 1.3em;
    text-decoration: none;
}
}

.nav-link:hover {
    background-color: rgba(235, 235, 235);
}



</style>