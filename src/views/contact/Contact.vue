<template>
  <div class="container">
    <div class="center-left">
      <h1 id="heading" class="bolder raleway heading dark"></h1>
    </div>
  </div>

  <div class="container-form">
    <div class="grid-container">
      <div class="grid-column">
        <div id="container-height" class="form-width bg-light p-5 radius-5">
          <div class="popup">
            <div id="center-popup" class="center-popup">
              <span
                class="popuptext raleway"
                id="statusPopUp"
                @click="hide()"
              ></span>
            </div>

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
          </div>

          <button
            class="submit-button bg-white raleway secondary"
            @click="test()"
          >
            Submit
          </button>
        </div>
      </div>
      <div class="grid-column">
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
      test() {
          let popup = document.getElementById("statusPopUp");
            popup.innerText = "Email sent";
            let height = document.getElementById('container-height').getBoundingClientRect().height
            popup.style.paddingTop = (height)/2 - 25 + 'px'
            popup.style.paddingBottom = (height)/2 - 25 + 'px'
            let innerPopup = document.getElementById("center-popup");
            innerPopup.style.height = '100%';
            innerPopup.style.width = "100%";
            popup.classList.toggle("show");
      },
    validateField() {
      return true;
    },
    hide() {
      let popup = document.getElementById("statusPopUp");
      let innerPopup = document.getElementById("center-popup");
      innerPopup.style.height = "0%";
      innerPopup.style.width = "0%";
      popup.classList.toggle("show");
    },
    sendEmail() {
      if (this.validateField()) {
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
          if (response.status == 200) {
            let popup = document.getElementById("statusPopUp");
            popup.innerText = "Email sent";
            let innerPopup = document.getElementById("center-popup");
            let height = document.getElementById('container-height').scrollHeight
            innerPopup.style.height = height + 'px';
            innerPopup.style.width = "100%";
            popup.classList.toggle("show");
          } else {
            let popup = document.getElementById("statusPopUp");
            popup.innerText = "Email failed to send";

            let innerPopup = document.getElementById("center-popup");
            innerPopup.style.height = "100%";
            innerPopup.style.width = "100%";
            popup.classList.toggle("show");
          }
        });
      } else {
        console.log("missing fields");
      }
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 450px) {
  .heading {
    font-size: 300%;
  }

  .center {
    width: 90%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

@media screen and (min-width: 451px) {
  .heading {
    font-size: 500%;
  }

  .center {
    width: 40%;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
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

.container {
  z-index: -1;
  margin-top: 10vh;
  position: relative;
}

.container-form {
  /* z-index: -1; */
  margin-top: 25vh;
  /* position: relative; */
}

.center-left {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 30%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/* Popup container */
.popup {
  height: 100%;
  position: relative;
  cursor: pointer;
}

.center-popup {
  /* height: 100%;
    width: 100%; */
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
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