<template>
  <div
      class="flex flex-col w-full sm:w-2/3 lg:w-1/2 mx-auto"
      @keyup.left="previous"
      @keyup.right="next"
      @keyup.enter="next"
  >

    <AnnotationField :sample="data[currentIdx]"/>

    <ProgressBar
        :currentId="currentIdx"
        :maxId="data.length"
    />

    <div class="flex mt-4 gap-2 justify-center">

      <Button v-if="hasPrevious" @click="previous">
        <ArrowLeftIcon aria-hidden="true" class="w-8"/>
        Previous Post
      </Button>

      <Button v-if="hasNext" @click="next">
        Next Post
        <ArrowRightIcon aria-hidden="true" class="w-8"/>
      </Button>

    </div>

  </div>
</template>
<script>
import AnnotationField from "@/components/AnnotationField.vue"
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/vue/20/solid"
import ProgressBar from "@/components/atoms/ProgressBar.vue"
import Button from "@/components/atoms/Button.vue"

export default {
  name: "Annotation",
  components: {
    Button,
    ProgressBar,
    ArrowRightIcon,
    ArrowLeftIcon,
    AnnotationField
  },
  props: {
    data: Array
  },
  computed: {
    hasPrevious() {
      return this.currentIdx > 0
    },
    hasNext() {
      return this.currentIdx < this.data.length - 1
    }
  },
  data() {
    return {
      currentIdx: 0,
    }
  },
  methods: {
    previous() {
      if (this.hasPrevious) this.currentIdx--
    },
    next() {
      if (this.hasNext) this.currentIdx++
    }
  }
}
</script>