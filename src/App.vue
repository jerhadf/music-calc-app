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
          <TimeText v-model.trim="time" input_msg="How much time? (minutes)"/>
          <!-- <TimeInput msg="How much time do you have>"/> -->
          <Calculate/>
        </div>
      </div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active">
                <a>How many times could I listen to {{song}} by {{artist}} in {{time}} minutes?</a>
              </li>
              <li>
                <a>How many minutes to listen to {{song}} by {{artist}} {{count}} times?</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
  // import needed components
  import TimeInput from "./components/TimeInput.vue"; 
  import AppTitle from "./components/AppTitle.vue";
  import SongInput from "./components/SongInput.vue";
  import ArtistInput from "./components/ArtistInput.vue"; 
  import Calculate from "./components/Calculate.vue";
  import TimeText from "./components/TimeText.vue";

  export default {
    name: "app",
    components: {
      TimeInput,
      AppTitle, 
      SongInput, 
      ArtistInput, 
      Calculate, 
      TimeText
    }, 
    data() {
      return {
        artist: '[artist]',
        time: 'X',
        count: 'X', 
        song: '[song]'
    }
  }
  };

</script>

<style>
@import '../public/debug.css';

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

.time-input {
  padding-bottom: 10px; 
}
    
</style>
