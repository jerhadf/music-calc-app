<template>
  <div class="bulma-main">
    <button class="button is-primary is-large"> {{ btn_msg }} </button>
    <h1 class="title"> Hello Bulma! </h1>
    <p class="subtitle">
        My first website with <strong>Bulma</strong>!
    </p>
    </div>
</template>

<script>
export default {
  name: 'BulmaMain',
  props: {
    btn_msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
