<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-lg flex flex-center column q-gutter-md">
        <div class="text-h5 text-primary">انتخاب سمت</div>

        <q-btn
          label="سرکارگر"
          color="primary"
          class="full-width"
          @click="goToDashboard('worker')"
        />
        <q-btn
          label="سرپرست"
          color="secondary"
          class="full-width"
          @click="goToDashboard('supervisor')"
        />
        <q-btn label="مدیر" color="accent" class="full-width" @click="goToDashboard('manager')" />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goToDashboard = (role) => {
  router.go(role)
  console.log('Selected Role:', role)
  // بعداً مسیر به صفحه مناسب بر اساس role ساخته خواهد شد
}
</script>
