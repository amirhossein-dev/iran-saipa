<template>
  <q-card class="q-pa-md q-gutter-md column items-center">
    <q-input v-model="roomNumber" label="شماره اتاق" type="number" outlined class="full-width" />

    <q-input v-model="carIssue" label="ایراد ماشین" outlined class="full-width" />

    <q-input v-model="defectiveMaterial" label="جنس ضایعاتی" outlined class="full-width" />

    <q-input v-model="manufacturer" label="شرکت سازنده جنس" outlined class="full-width" />

    <q-separator spaced />

    <q-btn label="ثبت" color="primary" @click="submitForm" class="full-width" />
    <q-btn label="پاک کردن" color="negative" flat @click="resetForm" class="full-width q-mt-sm" />
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const roomNumber = ref('')
const carIssue = ref('')
const defectiveMaterial = ref('')
const manufacturer = ref('')

const submitForm = () => {
  console.log('اطلاعات ثبت شد:', {
    roomNumber: roomNumber.value,
    carIssue: carIssue.value,
    defectiveMaterial: defectiveMaterial.value,
    manufacturer: manufacturer.value,
  })
  $q.notify({
    type: 'positive',
    message: 'اطلاعات تحت بررسی ثبت شد.',
  })
}

const resetForm = () => {
  roomNumber.value = ''
  carIssue.value = ''
  defectiveMaterial.value = ''
  manufacturer.value = ''
}
</script>
