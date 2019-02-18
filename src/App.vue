<template>
  <div id="app">
    <!-- An imposing hero banner to showcase something, wraps entire site structure --> 
    <section class="hero is-primary is-bold is-fullheight"> 

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
                    <i class="fas fa-clock fa-3x"></i>
                  </span>
                  <span>
                    <i class="fas fa-calculator fa-3x"></i>
                  </span>
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
                <div class="navbar-end">
                  <span class="navbar-item">
                    <a class="button is-primary is-inverted" href="https://github.com/vintners">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span id="github-name"> vintners </span>
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
          <div class="container is-flex is-horizontal-center is-vertical-center"> 
            <figure class="image is-128x128">
              <!-- Calculator image -->
              <img class="is-rounded" src="https://ww1.prweb.com/prfiles/2015/03/20/11915644/Design_Calculator_NEW_Icon_2015_Transparent.png">
            </figure>
          </div> 
          <BulmaMain btn_msg="Calculate" /> 
        </div>
			</div>

      <!-- Hero footer: will stick at the bottom -->
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

		</section>
  </div>
</template>

<script>
import BulmaMain from './components/BulmaMain.vue'

export default {
  name: 'app',
  components: {
    BulmaMain
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  text-align: center;
}

.is-horizontal-center {
  justify-content: center;
}

.navbar-item {
  margin-top: 6px;
}
.fa-clock { 
  margin-left: 20px;
}
.fa-calculator {
  margin-left: 8px;
}
</style>
