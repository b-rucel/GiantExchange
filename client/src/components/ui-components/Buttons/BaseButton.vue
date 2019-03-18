<template>
  <b-button class="style-custom" @click="onClick"><slot></slot></b-button>
</template>

<script>
  export default {
    name: "BaseButton",
    onClick() {
      this.$emit('click');
    }
  }
</script>

<style leng="scss" scoped>
  .style-custom {

  }
</style>