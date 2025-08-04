<!-- DefectCountSection.vue -->
<template>
  <q-card>
    <q-card-section class="column justify-center items-center q-gutter-lg q-ml-sm">
      <q-input
        v-model="defect.part"
        label="نام قطعه‌ی ضایعه"
        outlined
        color="orange"
        class="full-width"
      />

      <q-select
        v-model="defect.personnel"
        :options="personnelList"
        label="پرسنل مسئول"
        outlined
        emit-value
        map-options
        color="orange"
        class="full-width"
      />

      <q-input
        v-model="defect.reason"
        label="علت ضایعه شدن"
        outlined
        color="orange"
        class="full-width"
      />

      <q-input
        v-model.number="defect.count"
        label="تعداد"
        type="number"
        outlined
        color="orange"
        class="full-width"
      />

      <q-btn label="ثبت" color="primary" icon="check" @click="submitDefect" class="full-width" />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const defect = ref({
  part: '',
  personnel: '',
  reason: '',
  count: null,
})

const personnelList = [
  { label: 'رضا رضایی', value: 'reza' },
  { label: 'مریم محمدی', value: 'maryam' },
  { label: 'علی احمدی', value: 'ali' },
  { label: 'محمدرضا واحدیان', value: 'mohammad' },
  { label: 'اشکان جمشیدی', value: 'ashkan' },
  { label: 'جواد حشمتیان', value: 'javad' },
  { label: 'محمود غفاری', value: 'mahmod' },
]

function submitDefect() {
  if (
    !defect.value.part ||
    !defect.value.personnel ||
    !defect.value.reason ||
    !defect.value.count
  ) {
    $q.notify({
      type: 'negative',
      message: 'لطفاً تمام فیلدها را پر کنید',
      icon: 'warning',
    })
    return
  }

  $q.notify({
    type: 'positive',
    message: 'گزارش ضایعه ثبت شد',
    icon: 'check_circle',
  })

  defect.value = {
    part: '',
    personnel: '',
    reason: '',
    count: null,
  }
}
</script>
