<template>
  <div>
    <div class="media-space-small">
      <div class="left pl-3 media-title-left">
        <h1 id="heading" class="raleway dark h2 m-0"></h1>
      </div>
    </div>
    <div class="w-75 mx-auto">
      <Collapse collapseKey="experience" titleText="Experience" :content="experience" type="list" />
      <Collapse collapseKey="education" titleText="Education" :content="education" type='list' />
      <Collapse collapseKey="skills" titleText="Skills" :content="skills" type='button' />
      <Download />
    </div>
    
  </div>
</template>

<script>
import { experience }  from "@/views/resume/experience";
import { education } from "@/views/resume/education";
import {type} from "@/assets/js/type"
import Collapse from "@/views/resume/Collapse.vue";
import Download from './Download.vue';

export default {
  name: "Resume",
  components: { Collapse, Download },
  data() {
    return {
      experience: experience,
      education: education,
      skills: [
          {title: "Client Side", body:["HTML|HyperText Markup Language" , 
              "CSS|Cascading Style Sheet" ,
              "JS|JavaScript" ,
              "Vue.js (2/3)|JavaScript framework" , 
              "React|JavaScript framework" ,
              "Typescript|Like JavaScript" , 
              "Bootstrap (3/4)|CSS framework" ,
              "Bootstrap Vue|Vue/CSS library" ,
              "JSP|Java Server Page"  ]},
              {title: 'Server Side', body: ['Python3', 'Java', 'Django', 'Flask', 'Spring', 'MVC Architecture', 'REST API', 'Maven']}
      ]
    };
  },
  mounted() {
      type('heading','Resume', 100, {x: 0, y:0}, 50, 'bold-name dark', false)
    }
};
</script>

<style scoped>
/* cell phones */
@media only screen and (max-width: 480px) {
    .mx-auto { margin: 0 .2em 0 .2em !important; }
    .w-75 { width: 95%; }
}
/* tablets */
@media only screen and (max-width: 768px) {}
/* small screens and laptops */
@media only screen and (max-width: 1024px) {} 

</style>