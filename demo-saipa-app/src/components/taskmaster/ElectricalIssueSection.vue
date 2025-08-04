<template>
  <q-card class="q-pa-md">
    <q-form @submit.prevent="handleSubmit" class="q-gutter-md">
      <q-input v-model="roomNumber" label="شماره اتاق" dense outlined />

      <q-input v-model="faultyPart" label="نام قطعه ایراددار" dense outlined />

      <q-select
        v-model="technician"
        label="تکنسین مجری"
        :options="personnelList"
        dense
        outlined
        emit-value
        map-options
      />

      <q-checkbox v-model="isResolved" label="آیا مشکل حل شده؟" />

      <div v-if="isResolved" class="q-gutter-sm column items-center">
        <div class="text-subtitle2 q-mt-sm">زمان شروع :</div>

        <q-time v-model="startTime" format24h label="شروع حل" />
        <div class="text-subtitle2 q-mt-sm">زمان پایان :</div>
        <q-time v-model="endTime" format24h label="پایان حل" />
      </div>

      <!-- اگر ضایعاتی شد -->
      <div v-if="isScrapped" class="q-mt-md">
        <q-input v-model="scrappedPart" label="نام قطعه ضایعه‌شده" dense outlined />
      </div>

      <!-- سوییچ برای تعیین ضایعاتی شدن -->
      <q-checkbox v-model="isScrapped" label="آیا قطعه ضایعه شده؟" />

      <!-- دکمه ثبت -->
      <div class="row justify-end">
        <q-btn type="submit" label="ثبت گزارش" color="primary" icon="check" />
      </div>
    </q-form>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const roomNumber = ref('')
const faultyPart = ref('')
const technician = ref(null)
const isResolved = ref(false)
const startTime = ref(null)
const endTime = ref(null)
const isScrapped = ref(false)
const scrappedPart = ref('')

const personnelList = [
  { label: 'احمد رضایی', value: 'ahmad' },
  { label: 'سارا میرزایی', value: 'sara' },
  { label: 'مجید رحیمی', value: 'majid' },
]

function handleSubmit() {
  $q.notify({
    type: 'positive',
    message: 'گزارش ایراد با موفقیت ثبت شد',
  })

  // reset if needed
  roomNumber.value = ''
  faultyPart.value = ''
  technician.value = null
  isResolved.value = false
  startTime.value = null
  endTime.value = null
  isScrapped.value = false
  scrappedPart.value = ''
}
</script>
