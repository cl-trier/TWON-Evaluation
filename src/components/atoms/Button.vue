<template>
  <button
      class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
  >
        <span
            class="relative flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            <slot></slot>
        </span>
  </button>
</template>
<script>
export default {
  name: "Button",
}
</script>
