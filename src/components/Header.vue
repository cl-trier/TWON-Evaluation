<template>
  <header ref="header" class="bg-gray-900 text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div class="mx-auto max-w-7xl text-center">
        <h1 class="py-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
          <slot name="headline"></slot>
        </h1>

        <p class="mx-auto py-4 max-w-4xl md:text-xl leading-relaxed">
          <slot name="excerpt"></slot>
        </p>

        <div class="py-8 flex flex-wrap justify-center gap-4">
          <button
              class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              @click="startSurvey">
            Start Survey
          </button>

          <a :href="projectLink"
             class="block w-full px-6 py-3 font-medium text-white sm:w-auto underline underline-offset-4"
             target="_blank">
            More about the project
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  props: {
    projectLink: String
  },
  methods: {
    startSurvey() {
      window.scrollTo({
        top: this.$refs.header.scrollHeight,
        left: 0,
        behavior: "smooth",
      })
    }
  }
}
</script>