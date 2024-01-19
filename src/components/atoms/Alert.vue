<template>
  <div
      :class="{'bg-rose-100 text-rose-900': type === 'error', 'bg-teal-100 text-teal-900': type === 'success'}"
      class="w-full md:w-6/12 mx-auto bg-grey-100 text-grey-900 px-4 py-3 rounded-lg"
      role="alert"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Alert',
  props: {
    type: String
  }
}
</script>