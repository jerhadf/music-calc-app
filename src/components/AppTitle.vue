<template>
    <div class="app-title">
        <div class="container center">
            <figure class="image">
              <!-- Calculator image -->
              <img
                class="is-rounded"
                style="max-width: 130px;"
                src="..\assets\calculator_color.png"
              >
            </figure>
        </div>
        <h2 class="title"> {{ title }} </h2>
        <p class="subtitle">
            Find the <strong>time you need</strong> to listen to songs!
        </p>
    </div>
</template>

<script>
export default {
  name: 'AppTitle',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px; 
}

</style>
