<template>
  <div class="bg-slate-100 rounded-lg p-4 lg:p-8 shadow-md">
    <table class="table-auto text-md sm:text-lg mb-4">
      <tr class="text-slate-500">
        <td class="font-bold pr-4">Topic:</td>
        <td>{{ sample.topic }}</td>
      </tr>
      <tr class="text-slate-500">
        <td class="font-bold pr-4">Style:</td>
        <td>{{ sample.style }}</td>
      </tr>
      <tr class="text-slate-500">
        <td class="font-bold pr-4 align-top">Agent:</td>
        <td class="pb-2">{{ sample.agent }}</td>
      </tr>
      <tr class="text-slate-700 border-t-2 border-slate-300">
        <td class="font-bold pr-4 align-top pt-2">Content:</td>
        <td class="pt-2">{{ sample.text }}</td>
      </tr>
    </table>
    <span class="font-bold text-slate-700 text-md sm:text-lg mb-4">Authenticity:</span>
    <div class="p-4 mb-8">
      <Slider
          v-model="evaluation.value"
          v-bind="evaluation"
      />
    </div>
  </div>
</template>
<script>
import Slider from '@vueform/slider'
import {useEvaluationStore} from '@/store'

export default {
  name: "ReplyField",
  components: {
    Slider,
  },
  props: {
    sample: Object,
  },
  watch: {
    sample: function () {
      if (useEvaluationStore().getEvaluationByID(this.sample.id)) {
        this.evaluation.value = useEvaluationStore().getEvaluationByID(this.sample.id)
      } else {
        this.evaluation.value = 1
      }
    }
  },
  data() {
    return {
      reply: "",
      evaluation: {
        min: 1,
        max: 5,
        value: 1,
        tooltipPosition: 'bottom',
        format: function (value) {
          switch (value) {
            case 1:
              return 'low'
            case 2:
              return 'semi-low'
            case 3:
              return 'medium'
            case 4:
              return 'semi-high'
            case 5:
              return 'high'
            default:
              return 'undefined'
          }
        }
      }
    }
  },
  updated() {
    useEvaluationStore().setEvaluation(
        this.sample.id,
        this.evaluation.value
    )
  }
}
</script>
<style src="@vueform/slider/themes/default.css"></style>