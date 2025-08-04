<template>
  <div class="under-construction q-pa-xl flex flex-center column">
    <q-icon name="construction" size="64px" color="orange" />
    <h2 class="q-mt-md">این بخش هنوز در دست ساخت است</h2>
    <p>لطفاً بعداً مجدداً مراجعه کنید.</p>
    <q-btn color="primary" size="lg" @click="goBack()">بازگشت</q-btn>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goBack = () => {
  router.back()
}
</script>

<style scoped>
.under-construction {
  min-height: 300px;
  text-align: center;
  color: #f57c00;
}
</style>
