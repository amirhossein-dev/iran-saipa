<template>
  <q-card class="q-pa-md q-gutter-md">
    <div class="bg-grey-2 text-dark q-pa-md rounded-borders text-subtitle1 shadow-1">
      تعداد ماشین‌های تولیدی امروز:
      <strong class="text-primary">{{ todayProduced }}</strong>
    </div>

    <q-input
      v-model.number="faultyCount"
      type="number"
      label="تعداد ماشین‌های دارای ایراد برقی امروز"
      outlined
      dense
      :rules="[(val) => val >= 0 || 'عدد معتبر وارد کنید']"
    />

    <div class="row justify-end">
      <q-btn label="ثبت" color="primary" icon="check" @click="submitFaultyCount" />
    </div>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const todayProduced = 124

const faultyCount = ref(null)

function submitFaultyCount() {
  if (faultyCount.value === null || faultyCount.value < 0) {
    $q.notify({
      type: 'negative',
      message: 'لطفاً یک عدد معتبر وارد کنید.',
    })
    return
  }

  $q.notify({
    type: 'positive',
    message: 'تعداد ماشین‌های دارای ایراد ثبت شد.',
  })

  faultyCount.value = null
}
</script>
