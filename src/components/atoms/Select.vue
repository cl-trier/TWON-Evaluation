<template>
  <div class="w-full">
    <Listbox v-model="selected">
      <div class="relative mt-1">
        <ListboxButton
            :class="[updated ? 'bg-green-100' : 'bg-white']"
            class="relative w-full cursor-default rounded-lg py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        >
          <span class="block">{{ selected }}</span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon aria-hidden="true" class="h-5 w-5 text-gray-400"/>
            </span>
        </ListboxButton>

        <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
          <ListboxOptions
              class="absolute w-full z-50 mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
                v-for="value in options"
                v-slot="{ active, selected }"
                :value="value"
                as="template"
            >
              <li class="text-gray-900 relative cursor-default select-none py-2 pl-10 pr-4">
                <span class="block font-normal">{{ value }}</span>
                <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                >
                  <CheckIcon aria-hidden="true" class="h-5 w-5"/>
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script>
import {Listbox, ListboxButton, ListboxOption, ListboxOptions,} from '@headlessui/vue'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/vue/20/solid'

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    ChevronUpDownIcon
  },
  props: {
    options: Array,
  },
  data() {
    return {
      selected: this.options[0],
      updated: false
    }
  },
  updated() {
    this.updated = this.selected !== this.options[0]

    if (this.updated) {
      this.$emit('updated', this.selected)
    }
  }
}
</script>
