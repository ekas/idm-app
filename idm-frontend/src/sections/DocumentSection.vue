<template>
  <div v-if="!endOfCSV" class="textarea h-full flex-1 flex flex-col w-full p-5">
    <h2 class="font-semibold text-xl">Text from CSV Index: {{ currentCSVIndex }}</h2>
    <Textarea
      :value="csvData[currentCSVIndex]"
      size="large"
      rows="3"
      class="mt-5 h-full"
      disabled
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  currentCSVIndex: {
    type: Number,
  },
  csvData: {
    type: Object,
  },
})
</script>
