<template>
  <b-button class="style-custom"
            @click="onClick"
            :disabled="disabled"
            :type="type"
            :variant="variant">
    <slot/>
  </b-button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    onClick: {
      type: Function,
      default: () => console.log('click-click'),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'Button',
    },
    variant: {
      type: String,
      default: 'danger',
    },
  },
};
</script>

<style lang="scss" scoped>
  .style-custom {
    background-color: #FD2B2B;
  }
</style>

