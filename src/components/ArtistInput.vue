<template>
  <div class="artist-input">
    <div class="field">
      <div class="control has-icons-left">
        <input
          @input="$emit('input',$event.target.value)"
          class="input is-large is-rounded is-info"
          type="text"
          :placeholder="input_msg"
        >
        <span class="icon is-small is-left">
          <i class="fas fa-user-circle"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArtistInput",
  props: {
    input_msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->