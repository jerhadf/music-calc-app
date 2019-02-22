<template>
  <div class="control has-icons-left">
    <input
      @input="$emit('input',$event.target.value)"
      @keydown="controlInput"
      class="input is-large is-rounded is-info"
      type="number"
      :placeholder="input_msg"
      width="100"
      v-model="internalValue"
      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
    >
    <span class="icon is-small is-left">
      <i class="fas fa-clock"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "TimeInput",
  props: {
    input_msg: String, 
    value: { type: String, default: ""},
    max: {type: Number, default: 44}
  }, 
  computed: {
    internalValue: {
      get() {return this.value},
      set(v){ this.$emit("input", v)}
    }
  },
  methods: {
    controlInput (evt) { // prevents non-number inputs or above the maximum length. should be handled server-side too
      if (this.value.length >= this.max) {
        if (evt.keyCode >= 48 && evt.keyCode <= 90) {
          evt.preventDefault()
          return
        }
      } 
    }
  }
};
</script>