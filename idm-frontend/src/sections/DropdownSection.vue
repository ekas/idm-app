<template>
  <div class="classification flex-1 w-full p-5">
    <h2 class="font-semibold text-xl">Document Classification</h2>
    <AutoComplete
      v-model="localClassifierVal"
      :suggestions="classifierItems"
      @complete="search"
      size="medium"
      placeholder="Select Document Type"
      dropdown
      class="w-full mt-5"
    />
    <Button
      label="Next"
      icon="pi pi-angle-right"
      class="mt-5"
      iconPos="right"
      :disabled="!localClassifierVal"
      @click="handleNextBtn(localClassifierVal)"
    />
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'
import AutoComplete from 'primevue/autocomplete'

const props = defineProps({
  classifierVal: {
    type: String,
  },
  handleNextBtn: {
    type: Function,
  },
})

const classifierItems = ref([])
const localClassifierVal = ref(props.classifierVal)

watch(
  () => props.classifierVal,
  (newVal) => {
    localClassifierVal.value = newVal
  },
)

const search = (event) => {
  classifierItems.value = [...Array(10).keys()].map((item) => event.query + 'Document ' + item)
}
</script>
