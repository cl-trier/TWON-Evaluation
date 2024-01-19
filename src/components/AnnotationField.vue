<template>
  <div class="bg-slate-100 rounded-lg p-4 lg:p-8 border border-slate-300">
    <table class="table-auto text-md sm:text-lg mb-4">
      <tr class="text-slate-500">
        <td class="font-bold pr-4">Topic:</td>
        <td>{{ sample.topic }}</td>
      </tr>
      <tr class="text-slate-500">
        <td class="font-bold pr-4">Platform:</td>
        <td>{{ sample.platform }}</td>
      </tr>
      <tr class="text-slate-500">
        <td class="font-bold pr-4 align-top">Persona:</td>
        <td class="pb-2">{{ sample.persona }}</td>
      </tr>
      <tr class="text-slate-700 border-t-2 border-slate-300">
        <td class="font-bold pr-4 align-top pt-2">Content:</td>
        <td class="pt-2">{{ sample.text }}</td>
      </tr>
    </table>
    <span class="font-bold text-slate-700 text-md sm:text-lg mb-4">Topic Alignment:</span>
    <div class="p-4 mb-8">
      <Slider
          v-model="topic.value"
          v-bind="topic"
      />
    </div>
    <span class="font-bold text-slate-700 text-md sm:text-lg mb-4">Persona Alignment:</span>
    <div class="p-4 mb-8">
      <Slider
          v-model="persona.value"
          v-bind="persona"
      />
    </div>
    <span class="font-bold text-slate-700 text-md sm:text-lg mb-4">Overall Authenticity:</span>
    <div class="p-4 mb-8">
      <Slider
          v-model="authenticity.value"
          v-bind="authenticity"
      />
    </div>
  </div>
</template>
<script>
import Slider from '@vueform/slider'
import {useDataStore} from '@/store'

import {annotationConfig} from '@/config'

export default {
  name: "AnnotationField",
  components: {
    Slider,
  },
  props: {
    sample: Object,
  },
  watch: {
    sample: function () {
      /**
       * Assigns values to the topic, persona, and authenticity properties of the current object.
       */
      const {topic, persona, authenticity} = this.sample.annotation

      this.topic.value = topic != null ? topic : 1
      this.persona.value = persona != null ? persona : 1
      this.authenticity.value = authenticity != null ? authenticity : 1
    }
  },
  data() {
    return {
      topic: {...annotationConfig},
      persona: {...annotationConfig},
      authenticity: {...annotationConfig}
    }
  },
  updated() {
    /**
     * Updates the data store with the annotation for a sample.
     */
    useDataStore().setAnnotation(
        this.sample.id,
        {
          topic: this.topic.value,
          persona: this.persona.value,
          authenticity: this.authenticity.value,
        }
    )
  }
}
</script>
<style src="@vueform/slider/themes/default.css"></style>