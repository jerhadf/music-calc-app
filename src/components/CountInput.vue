<template>
  <div class="count-input">
    <div class="field">
      <div class="control has-icons-left">
        <input
          @input="$emit('input',$event.target.value)"
          class="input is-large is-rounded is-info"
          type="number"
          :placeholder="input_msg"
          width="100"
          maxlength="10"
          min="0" max="23"
          oninput="this.value=this.value.replace(/[^0-9]/g,'');"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-headphones"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountInput",
  props: {
    input_msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.control {
  margin: 15px;
  padding-bottom: 15px;
  position: relative;
  width: 50%;
  display: block;
  margin: 0 auto;
}
</style>