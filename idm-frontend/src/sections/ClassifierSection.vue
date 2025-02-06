<template>
  <div v-if="csvData.length === 0" class="card m-2 h-23">
    <h2 class="font-bold">Upload File</h2>
    <FileUploader :handleFileUpload="handleFileUpload" />
  </div>
  <div v-else class="selectionarea flex">
    <DocumentSection v-if="!endOfCSV" :currentCSVIndex="currentCSVIndex" :csvData="csvData" />
    <div v-else class="textarea h-full flex-1 flex flex-col w-full p-5">
      <h2 class="font-semibold text-xl">
        We have reached End of CSV file. Please click on reload to upload new data file.
      </h2>
      <Button label="Reload" class="mt-5 w-25" @click="handleReloadtBtn" />
    </div>
    <DropdownSection
      v-if="!endOfCSV"
      v-model:classifierVal="classifierVal"
      :handleNextBtn="handleNextBtn"
    />
  </div>
  <Toast position="bottom-right" />
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

import { useToast } from 'primevue/usetoast'
import DocumentSection from './DocumentSection.vue'
import DropdownSection from './DropdownSection.vue'

const csvData = ref([])
const csvClassifiedData = ref([])
const classifierVal = ref(null)
const currentCSVIndex = ref(0)
const endOfCSV = ref(false)
const BACKEND_API_URL = 'http://localhost:3001'
const toast = useToast()

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file && file.type === 'text/csv') {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e.target.result
      parseCSV(text)
    }
    reader.readAsText(file)
  } else {
    alert('')
    toast.add({
      severity: 'warn',
      summary: 'Warn',
      detail: 'Please upload a valid CSV file.',
      life: 3000,
    })
  }
}

// Method to parse CSV content into usable format
const parseCSV = (text) => {
  const rows = text.split('\n').map((row) => row.split(','))
  csvData.value = rows.slice(1).map((row) => row.map((cell) => cell.trim()))
}

const handleNextBtn = async (val) => {
  await addClassificationToDB(val)
}

const addClassificationToDB = async (val) => {
  try {
    classifierVal.value = val
    const response = await axios.post(`${BACKEND_API_URL}/classification`, {
      text: csvData.value[currentCSVIndex.value][0],
      classifier: val,
    })

    if (response) {
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Data Saved Successfully',
        life: 3000,
      })

      csvClassifiedData.value.push({
        text: csvData.value[currentCSVIndex.value][0],
        classifier: val,
      })
      if (currentCSVIndex.value === csvData.value.length - 1) {
        endOfCSV.value = true
        return
      }
      classifierVal.value = ''
      currentCSVIndex.value = currentCSVIndex.value + 1
    }
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Server Error', life: 3000 })
    console.log(error)
  }
}

const handleReloadtBtn = () => {
  location.reload()
}
</script>

<style scoped>
.card {
  max-width: 400px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.selectionarea {
  height: calc(100vh - 60px);
}
</style>
