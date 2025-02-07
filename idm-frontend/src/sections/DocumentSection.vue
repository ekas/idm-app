<template>
  <div v-if="!endOfCSV" class="flex flex-col flex-1 w-full h-full p-5 textarea">
    <h2 class="text-xl font-semibold">Text from CSV Index: {{ currentCSVIndex + 1 }}</h2>
    <Textarea
      :value="csvData[currentCSVIndex]"
      size="large"
      rows="3"
      class="h-full mt-5"
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
