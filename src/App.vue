<template>
  <div id="app">
    <!-- An imposing hero banner to showcase something, wraps entire site structure -->
    <section class="hero is-bold is-primary is-fullheight">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <span class="icon">
                  <i class="fas fa-music fa-3x"></i>
                </span>
                <span>
                  <i id="clock-icon" class="fas fa-clock fa-3x"></i>
                </span>
                <span>
                  <i class="fas fa-calculator fa-3x"></i>
                </span>
              </a>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <span class="navbar-item">
                  <a class="button is-primary is-inverted" href="https://github.com/vintners">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                    <span id="github-name">jeremy</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body">
        <div class="container">
          <AppTitle title="The Music-Time Calculator"/>
          <SongInput v-model.trim="song" input_msg="Enter your song!"/>
          <ArtistInput v-model.trim="artist" input_msg="Enter the artist!"/>
          <transition name="slide">
            <TimeInput v-model.trim="time" v-if="show_time" input_msg="How much time? (minutes)"/> 
            <CountInput v-model.trim="count" v-if="show_count" input_msg="How many times to listen?"/>
          </transition>
          <Calculate/>
        </div>
      </div>
 
      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <MenuItem v-on:selected="changeSelected" :song="song" :artist="artist" :time="time" :count="count"/>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
// import needed components
import AppTitle from "./components/AppTitle.vue";
import SongInput from "./components/SongInput.vue";
import ArtistInput from "./components/ArtistInput.vue";
import Calculate from "./components/Calculate.vue";
import TimeInput from "./components/TimeInput.vue";
import CountInput from "./components/CountInput.vue";
import MenuItem from "./components/MenuItem.vue";

export default {
  name: "app",
  components: {
    AppTitle,
    SongInput,
    ArtistInput,
    Calculate,
    TimeInput,
    MenuItem, 
    CountInput
  },
  data() {
    return {
      artist: "[artist]",
      time: "X",
      count: "X",
      song: "[song]",
      show_time: true, 
      show_count: false
    };
  }, 
  methods: {
    changeSelected: function () { 
      this.show_time = !this.show_time; 
      this.show_count = !this.show_count;
    }
  }
};
</script>

<style>
@import "../public/debug.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.hero-head {
  position: relative;
  top: 5px;
}

.hero-body {
  position: relative;
  top: -50px;
}

#clock-icon {
  margin-left: 20px;
}

.fa-calculator {
  margin-left: 8px;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

</style>
