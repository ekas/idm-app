<template>
  <Menubar :model="menuItems">
    <template #start>
      <h2 class="font-bold text-lg">MyApp</h2>
    </template>
    <template #end>
      <Button icon="pi pi-user" label="Profile" class="p-button-text" />
    </template>
  </Menubar>
</template>

<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'

const menuItems = ref([
  { label: 'Home', icon: 'pi pi-home', to: '/' },
  { label: 'About', icon: 'pi pi-info-circle', to: '/' },
  { label: 'Contact', icon: 'pi pi-envelope', to: '/' },
])
</script>

<style scoped>
:deep(.p-menubar) {
  background: #2c3e50;
  color: white;
  border: none;
}
:deep(.p-menubar .p-menuitem-link) {
  color: white;
}
</style>
