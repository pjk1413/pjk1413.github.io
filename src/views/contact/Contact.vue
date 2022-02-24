<template>
<div class="media-space-small">
  <div class="container">
    <div class="center-left">
      <h1 id="heading" class="raleway fc-dark h2 m-0"></h1>
    </div>
  </div>
  <div id="email-notification" class="overlay">
    <div id="popover-content" class="overlay-content fc-white raleway fs-4">
      
    </div>
  </div>
  <div class="container-form">
    <div class="grid-container">
      <div class="grid-column">
        <div id="container-height" class="mx-auto w-75 bg-light p-2 br-2">

            <InputField
              @updateField="(e) => (name = e)"
              placeholder="Full Name"
              inputType="text"
              fieldType="input"
            />
            <InputField
              @updateField="(e) => (email = e)"
              placeholder="Email"
              inputType="email"
              fieldType="input"
            />
            <InputField
              @updateField="(e) => (message = e)"
              placeholder="Message"
              inputType="text"
              fieldType="textarea"
            />

          <button
            class="submit-button bg-white raleway secondary"
            @click="sendEmail()"
          >
            Submit
          </button>
        </div>
      </div>
      <div>
        <div class="contact-text">
          <p class="raleway">
            Would love to hear from you with any questions, ideas, thoughts?
            Always looking for a new challenge.
          </p>
          <p class="raleway">
            Contact me using the form to the left or any of the fields below. I
            look forward to hearing from you.
          </p>

          <LinkButton
            type="Email"
            value="pjk1413@gmail.com"
            link="mailto:pjk1413@gmail.com"
          />
          <LinkButton
            type="LinkedIn"
            value="linkedin.com/in/pjk1413"
            link="http://www.linkedin.com/in/pjk1413"
          />
          <LinkButton
            type="Github"
            value="github.com/pjk1413"
            link="http://www.github.com/pjk1413"
          />
        </div>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
import { type } from "@/assets/js/type";
import emailjs from "@emailjs/browser";
import InputField from "@/views/contact/InputField.vue";
import LinkButton from "./LinkButton.vue";

export default {
  name: "Contact",
  components: {
    InputField,
    LinkButton,
  },
  data() {
    return {
      email: "",
      name: "",
      message: "",
      errors: []
    };
  },
  mounted() {
    type(
      "heading",
      "Contact",
      100,
      { x: 0, y: 0 },
      50,
      "bold-name dark",
      false
    );
  },
  methods: {
    openNav() {
      document.getElementById("email-notification").style.width = "100%";
    },
    closeNav() {
      document.getElementById("email-notification").style.width = "0%";
    },
    validateFields() {
      let emailStatus = this.email.match(
        // eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

      let nameStatus = this.name != null && this.name.replaceAll(' ', '') != ''
      let messageStatus = this.message != null && this.message.replaceAll(' ', '') != ''

      if (nameStatus && messageStatus && emailStatus) {
        return true
      } else {
        if (!nameStatus) {
          this.errors.push('Name cannot be blank')
        }

        if (!messageStatus) {
          this.errors.push('Message cannot be blank')
        }

        if (!emailStatus) {
          this.errors.push('A valid email was not entered')
        }

        return false
      }

    },
    hide() {
      let popup = document.getElementById("statusPopUp");
      let innerPopup = document.getElementById("center-popup");
      innerPopup.style.height = "0%";
      innerPopup.style.width = "0%";
      popup.classList.toggle("show");
    },
    sendEmail() {
      if (this.validateFields()) {
        let templateParams = {
          name: this.name,
          email: this.email,
          message: this.message,
        };

        let response = emailjs.send(
          "patrick_kramer",
          "portfolio_contact",
          templateParams,
          "user_Qb9dJGTbqmtEMIn9mr8aZ"
        );
        response.then((response) => {
          console.log(response.status)
          if (response.status == 200) {
            document.getElementById("popover-content").innerText = "Email sent"
            document.getElementById("popover-content").classList.remove("bg-danger")
            this.openNav()
            setTimeout(() => this.closeNav(), 2000)
          } else {
            document.getElementById("popover-content").innerText = "Email failed to send"
            document.getElementById("popover-content").classList.add("bg-danger")
            this.openNav()
            setTimeout(() => this.closeNav(), 2000)
            
          }
        });
      } else {
        let errorText = ''
        this.errors.forEach(error => {
          errorText += error + '\n'
        })
        document.getElementById("popover-content").innerText = errorText
        document.getElementById("popover-content").classList.add("bg-danger")
        this.openNav()
        setTimeout(() => this.closeNav(), 2000)
        this.errors = []
      }
    },
  },
};
</script>

<style scoped>
/* cell phones */
@media only screen and (max-width: 480px) {
    .grid-container { display: block !important; }
    .contact-text { text-align: center; max-width: 100% !important; }
}
/* tablets */
@media only screen and (max-width: 768px) {}
/* small screens and laptops */
@media only screen and (max-width: 1024px) {} 

.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(0, 0, 0); /* Black fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

.form-width {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

.submit-button {
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(142, 202, 230);
  border-radius: 5px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  transition: max-height 0.5s ease-out;
}

.contact-text {
  text-align: center;
  max-width: 70%;
}

.grid-container {
  display: grid;
  grid-template-columns: 50% 50%;
}

.submit-button:hover {
  background-color: rgba(142, 202, 230);
  color: white;
}

#dropdown {
  position: absolute;
}

/* Popup container */
.popup {
  height: 100%;
  position: relative;
  cursor: pointer;
}

/* The actual popup (appears on top) */
.popup .popuptext {
  visibility: hidden;
  background-color: rgba(142, 202, 230);
  color: white;
  text-align: center;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
  width: 100%;
  /* height: 100%; */
}

/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>