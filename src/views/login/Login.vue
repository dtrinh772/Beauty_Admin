<template>
  <div class="container sm:px-10">
    <div class="block xl:grid grid-cols-2 gap-4">
      <div class="hidden xl:flex flex-col min-h-screen">logo</div>
      <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
        <form @submit.prevent="onSubmit">
          <div class="form-floating mb-3">
            <input
              type="email"
              v-model="form.username"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              v-model="form.password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <!-- <div class="text-danger my-2">{{ userStore.state.error }}</div> -->
          <button class="btn btn-success btn-block my-2" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
// import userStore from '@/stores/user'
export default defineComponent({
  setup() {
    const form = reactive({
      username: '',
      password: ''
    })
    const onSubmit = () => {
      //   userStore.login(form.username, form.password)
      form.username = ''
      form.password = ''
    }
    return { form, onSubmit }
  }
})
</script>
<style></style>
