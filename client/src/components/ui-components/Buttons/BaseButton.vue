<template>
  <b-button class="style-custom" @click="onClick">
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  name: 'BaseButton',
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
}
</script>

<style lang="scss" scoped>
  .style-custom {

  }
</style>

