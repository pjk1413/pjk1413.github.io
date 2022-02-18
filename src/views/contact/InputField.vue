<template>
  <div class="z-top">
    <input
      @input="handleInput"
      :value="value"
      ref="textBox"
      class="input-box raleway"
      :type="inputType"
      :placeholder="placeholder"
      v-if="fieldType == 'input'"
    />
    <textarea
      :value="value"
      ref="textBox"
      class="input-box raleway custom-height"
      :placeholder="placeholder"
      v-if="fieldType == 'textarea'"
      @input="handleInput"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    placeholder: String,
    inputType: String,
    fieldType: {
      default: "input",
      type: String,
    },
    value: String,
  },
  data() {
    return {
      text: this.value,
    };
  },
  methods: {
    handleInput() {
      this.$emit("updateField", this.$refs.textBox.value);
    },
  },
};
</script>

<style>
.z-top {
  z-index: 1000 !important;
}

.custom-height {
  height: 100px;
}

.input-box {
  resize: none;
  z-index: 1000 !important;
  font-weight: bold;
  font-size: 110%;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 2px solid rgba(204, 204, 204, 0.712);
  border-radius: 4px;
  box-sizing: border-box;
}

.label {
}
</style>