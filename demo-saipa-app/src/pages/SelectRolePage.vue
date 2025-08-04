<template>
  <q-page class="q-pa-lg flex flex-center column q-gutter-md">
    <div class="text-h5 text-primary">انتخاب سمت</div>

    <q-btn
      v-for="role in roles"
      :key="role.key"
      :label="role.label"
      :color="role.color"
      class="full-width"
      @click="goToDashboard(role.key)"
    />
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const roles = [
  { key: 'taskmaster', label: 'سرکارگر', color: 'primary' },
  { key: 'supervisor', label: 'سرپرست', color: 'secondary' },
  { key: 'manager', label: 'مدیر', color: 'accent' },
]

const goToDashboard = (roleKey) => {
  router.push(`/${roleKey}`)
}
</script>
