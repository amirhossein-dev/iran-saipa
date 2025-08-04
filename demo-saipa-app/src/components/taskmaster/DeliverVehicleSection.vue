<template>
  <q-card class="q-pa-md column q-gutter-md items-center">
    <div class="full-width column items-center">
      <span class="text-h6">ساعت تحویل : </span>
      <q-time v-model="deliveryTime" label="ساعت تحویل" format24h />
    </div>

    <q-card
      bordered
      class="q-pb-sm bg-grey-3 q-my-sm full-width column q-py-lg q-px-md"
      style="border-radius: 20px"
    >
      <div class="text-caption">مشخصات تحویل‌دهنده (خارج از لیست پرسنل)</div>
      <div class="column q-gutter-lg">
        <q-input v-model="deliverer.name" label="نام" outlined dense />
        <q-input v-model="deliverer.family" label="نام خانوادگی" outlined dense />
        <q-input v-model="deliverer.code" label="کد پرسنلی" outlined dense />
      </div>
    </q-card>

    <q-select
      class="full-width"
      v-model="receiver"
      :options="personnelList"
      label="تحویل گیرنده"
      option-label="name"
      option-value="id"
      outlined
      dense
    />

    <q-input
      v-model="returnReason"
      label="علت برگشتی"
      outlined
      dense
      type="textarea"
      autogrow
      class="full-width"
    />

    <div class="full-width column items-center">
      <span class="text-h6">ساعت ارسال : </span>

      <q-time v-model="sendTime" label="ساعت ارسال" format24h />
    </div>
    <!-- چک باکس و شرط نمایش فیلد -->
    <q-checkbox v-model="hasScratches" label="آیا خط خوردگی یا غر شدگی دارد؟" />

    <q-input
      v-if="hasScratches"
      v-model="scratchDetails"
      label="توضیحات خط خوردگی، غر شدگی"
      outlined
      class="full-width"
      type="textarea"
      autogrow
    />
    <q-separator spaced />

    <q-btn label="ثبت" color="primary" @click="submitForm" class="full-width" />
    <q-btn label="پاک کردن" color="negative" flat @click="resetForm" class="full-width q-mt-sm" />
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const deliveryTime = ref('')
const sendTime = ref('')
const returnReason = ref('')
const scratchDetails = ref('')
const hasScratches = ref(false)

const deliverer = ref({
  name: '',
  family: '',
  code: '',
})

const receiver = ref(null)
const $q = useQuasar()
const personnelList = [
  { id: 1, name: 'علی رضایی' },
  { id: 2, name: 'مهدی کیانی' },
  { id: 3, name: 'زهرا کریمی' },
]

const submitForm = () => {
  console.log('اطلاعات ثبت شد:', {
    deliveryTime: deliveryTime.value,
    sendTime: sendTime.value,
    returnReason: returnReason.value,
    scratchDetails: hasScratches.value ? scratchDetails.value : null,
    deliverer: deliverer.value,
    receiver: receiver.value,
  })
  $q.notify({
    type: 'positive',
    message: 'اطلاعات تحویل ماشین ثبت شد.',
  })
}

const resetForm = () => {
  deliveryTime.value = ''
  sendTime.value = ''
  returnReason.value = ''
  scratchDetails.value = ''
  hasScratches.value = false
  deliverer.value = { name: '', family: '', code: '' }
  receiver.value = null
}
</script>
