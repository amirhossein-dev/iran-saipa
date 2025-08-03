<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-lg flex flex-center">
        <q-card class="q-pa-md full-width" style="max-width: 400px">
          <q-card-section class="text-center">
            <div class="text-h6 text-primary">ورود به سامانه</div>
          </q-card-section>

          <q-card-section class="q-gutter-md">
            <q-input
              filled
              label="کد پرسنلی"
              v-model="personnelCode"
              type="text"
              required
              class="full-width"
            />
            <q-input
              filled
              label="رمز ورود"
              v-model="password"
              type="password"
              required
              class="full-width"
            />
          </q-card-section>

          <q-card-actions align="center">
            <q-btn label="ورود" color="primary" class="full-width" @click="login" />
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const personnelCode = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  if (!personnelCode.value || !password.value) {
    alert('لطفا تمام فیلدها را پر کنید')
    return
  }

  router.push('/select-role')
}
</script>
