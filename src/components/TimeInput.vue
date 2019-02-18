<template>
  <div class="center">
    <number-input 
    class="minutes"
    v-model="value" 
    :min="1" 
    :max="10" 
    :placeholder="msg" 
    inline controls>
    </number-input>
  </div>
</template>

<script>
  export default {
    name: 'TimeInput',
    props: {
        msg: String
    },
    data() {
      return {
        value: 1,
      };
    },
  };
</script>

<style scoped>

.center {
    display: inline-block;
    justify-content: center;
    align-items: center;
}

.minutes {
    margin-bottom: 10px;
}

</style>