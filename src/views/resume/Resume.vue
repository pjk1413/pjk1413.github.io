<template>
  <div>
    <div class="container">
      <div class="center">
        <h1 id="heading" class="bolder raleway heading dark"></h1>
      </div>
    </div>
    
    
    <Collapse
      collapseKey="experience"
      titleText="Experience"
      :content="experience"
      type="list"
    />
    <Collapse collapseKey="education" titleText="Education" :content="education" type='list' />
    <Collapse collapseKey="skills" titleText="Skills" :content="skills" type='button' />

    <div class="p-2 custom-width mx-auto h-100">
      <a class="secondary" href="/files/Resume.pdf" download>
    <button class="collapsible bg-white raleway secondary">Download</button>
    </a>
    </div>
  </div>
</template>

<script>
import { experience }  from "@/views/resume/experience";
import { education } from "@/views/resume/education";
import {type} from "@/assets/js/type"
import Collapse from "@/views/resume/Collapse.vue";

export default {
  name: "Resume",
  components: { Collapse },
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
.custom-width {
    width: 60%;
}

@media screen and (max-width: 400px) {
  .heading {
    font-size: 300%;
  }
}

@media screen and (min-width: 401px) {
  .heading {
    font-size: 500%;
  }
}

.collapsible:hover {
  border: 1px solid rgba(142, 202, 230);
  background-color: white;
  color: rgba(142, 202, 230);
}

.collapsible {
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: 1px solid rgba(142, 202, 230);
  background-color: rgba(142, 202, 230);
  color: white;
  border-radius: 5px;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}

.badge {
    background-color: orange;
}

#dropdown {
  position: absolute;
}

.container {
    z-index: -1;
  height: 20vh;
  position: relative;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 30%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

</style>