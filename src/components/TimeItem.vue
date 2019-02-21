<template>
  <!-- Below: If "isActive" is true, bind the class "active" to this element -->
  <li id="menu-item" v-on:click="toggleActive" v-bind:class="{ active : isActive }">
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
  }, 
  methods: {
    toggleActive: function() { 
      this.isActive = !this.isActive
    }
  }
};
</script>

<style scoped>
#menu-item {
  transition: background-color 10s, font-weight 10s; 
}

#menu-item.active {
  font-weight: bolder;
  background-color: #000000;
}
</style> 