<template>
  <ul>
    <!-- Below: If "isActive" is true, bind the class "active" to this element -->
    <li id="menu-item" v-on:click="toggleActive" :class="{ 'is-active' : selected == 'time' }">
      <a>How many times could I listen to {{song}} by {{artist}} in {{time}} minutes?</a>
    </li>
    <li id="menu-item" v-on:click="toggleActive" :class="{ 'is-active' : selected == 'count' }">
      <a>How long to listen to {{song}} by {{artist}} {{count}} times?</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    text: String,
    song: String,
    artist: String,
    time: String, 
    count: String
  },
  data() {
    return {
      selected: "time"
    };
  }, 
  methods: {
    toggleActive: function () {
      this.selected == "time" ? this.selected = "count" : this.selected = "time"; // switches the active element
      this.$emit("selected")
    }
  }
};
</script>

<style>
#menu-item {
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  border-top-left-radius: 6%; 
  border-top-right-radius: 6%; 
}

#menu-item.is-active {
  background-color: white;
  text-shadow: 
    -.1px -.1px 0 rgb(17, 17, 17), 
    .1px -.1px 0 rgb(17, 17, 17),
    -.1px .1px 0 rgb(17, 17, 17), 
    .1px .1px 0 rgb(17, 17, 17);
}
</style> 