<template>
  <div
      class="flex flex-col w-full sm:w-2/3 lg:w-1/2 mx-auto"
      @keyup.left="previous"
      @keyup.right="next"
      @keyup.enter="next"
  >

    <EvaluationField :sample="samples[currentItem]"/>

    <ProgressBar
        :currentId="currentItem"
        :maxId="this.samples.length"
    />

    <div class="flex mt-4 gap-2 justify-center">

      <Button v-if="hasPrevious" :action="previous">
        <ArrowLeftIcon aria-hidden="true" class="w-8"/>
        Previous Tweet
      </Button>

      <Button v-if="hasNext" :action="next">
        Next Tweet
        <ArrowRightIcon aria-hidden="true" class="w-8"/>
      </Button>

    </div>

  </div>
</template>

<script>
import EvaluationField from "@/components/EvaluationField.vue"
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/vue/20/solid"
import ProgressBar from "@/components/atoms/ProgressBar.vue"
import Button from "@/components/atoms/Button.vue"

export default {
  name: "Reply",
  components: {Button, ProgressBar, ArrowRightIcon, ArrowLeftIcon, EvaluationField},
  props: {
      samples: Object
  },
  computed: {
    hasPrevious() {
      return this.currentItem > 0
    },
    hasNext() {
      return this.currentItem < this.samples.length - 1
    }
  },
  data() {
    return {currentItem: 0}
  },
  methods: {
    previous() {
      if (this.hasPrevious) this.currentItem--
    },
    next() {
      if (this.hasNext) this.currentItem++
    }
  }
}
</script>