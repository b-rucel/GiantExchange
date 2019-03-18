<template>
  <b-button class="style-custom"
            @click="onClick"
            :disabled="disabled"
            :type="type">
    <slot/>
  </b-button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    onClick: {
      type: Function,
    },
    disabled: {
      type: Boolean,
    },
    type: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .style-custom {

  }
</style>
