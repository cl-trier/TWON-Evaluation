<template>
  <a
      class="ml-4 underline underline-offset-8 text-gray-600"
      href="https://seafile.rlp.net/u/d/e2a60cab32854c2d8e7a/"
      target="_blank"
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'ButtonLink',
  props: {
    href: String,
    target: {
      type: String,
      default: '_blank'
    }
  }
}
</script>