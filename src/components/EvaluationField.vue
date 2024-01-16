<template>
  <div class="bg-slate-100 rounded-lg p-4 lg:p-8 border border-slate-300">
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
      if (
          this.sample.annotation.topic != null &&
          this.sample.annotation.persona != null &&
          this.sample.annotation.authenticity != null
      ) {
        this.topic.value = this.sample.annotation.topic
        this.persona.value = this.sample.annotation.persona
        this.authenticity.value = this.sample.annotation.authenticity
      } else {
        this.topic.value = 1
        this.persona.value = 1
        this.authenticity.value = 1
      }
    }
  },
  data() {
    return {
      reply: "",
      topic: {
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
      },
      persona: {
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
      },
      authenticity: {
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