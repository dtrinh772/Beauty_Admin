<template>
  <div class="container-fluid main-vdit">
    <div class="row flex-nowrap">
      <Sidebar />
      <div class="col py-3 app-main">
        <AppMain />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue'
import AppMain from './components/AppMain.vue'
import Navbar from './components/Navbar/Navbar.vue'

export default {
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
}
</script>
<style></style>
