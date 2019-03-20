<template>
  <b-link
    class="style-custom"
    :disabled="disabled"
    :href="href">
    <slot/>
  </b-link>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    href: {
      type: String,
      default: '#',
    },
    text: {
      type: String,
      default: 'Link',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
  .style-custom {
  }
</style>

