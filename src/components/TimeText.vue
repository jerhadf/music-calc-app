
<template>
  <div class="time-text">
    <div class="field">
        <div class="control has-icons-left">
            <input class="input is-medium is-rounded is-info" type="text" :placeholder="input_msg">
            <span class="icon is-small is-left">
                <i class="fas fa-clock"></i>
            </span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeText',
  props: {
    input_msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .control {
        margin: 15px;
    }
</style>
