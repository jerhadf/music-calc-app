<template>
  <!-- Below: If "isActive" is true, bind the class "active" to this element -->
  <li v-on:click="isActive = !isActive" v-bind:class="{ active_li: isActive }">
    <a>How many times could I listen to {{song}} by {{artist}} in {{time}} minutes?</a>
  </li>
</template>

<script>
export default {
  name: "TimeItem",
  props: {
    text: String,
    song: String,
    artist: String,
    time: String
  },
  data() {
    return {
      isActive: true
    };
  }
};
</script>

<style scoped>
.active_li {
  font-weight: bolder;
  background-color: #000000;
}
</style> 