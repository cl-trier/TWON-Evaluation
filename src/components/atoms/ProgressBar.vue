<template>
  <div class="flex gap-4 items-center mt-4">
      <span class="text-sm text-slate-700">
        Progress&nbsp;({{ currentId + 1 }}/{{ maxId }}):
      </span>
    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
          :style="{'width': progress + '%'}"
          class="bg-blue-500 h-2.5 rounded-full"
      ></div>
    </div>
  </div>
</template>
<script>

export default {
  name: "ProgressBar",
  props: {
    currentId: Number,
    maxId: Number,
  },
  computed: {
    progress() {
      return (this.currentId + 1) / this.maxId * 100
    }
  },
}
</script>
