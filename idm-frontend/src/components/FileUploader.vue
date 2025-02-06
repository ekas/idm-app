<template>
  <input type="file" @change="handleFileUpload" accept=".csv" class="p-button-text" />
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  handleFileUpload: {
    type: Function,
  },
})
</script>
