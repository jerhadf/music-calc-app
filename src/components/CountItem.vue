<template>
  <!-- Below: If "isActive" is true, bind the class "active" to this element -->
  <li v-on:click="isActive = !isActive" v-bind:class="{ active_li: isActive }">
    <a>How long to listen to {{song}} by {{artist}} {{count}} times?</a>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    text: String,
    song: String,
    artist: String,
    count: String
  },
  data() {
    return {
      isActive: false
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