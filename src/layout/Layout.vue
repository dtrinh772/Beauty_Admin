<template>
  <div class="container-fluid main-vdit">
    <div class="row flex-nowrap">
      <Sidebar />
      <div class="col py-3 app-main">
        <Breadcrumb />
        <AppMain />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue'
import AppMain from './components/AppMain.vue'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue'

export default {
  components: {
    Sidebar,
    AppMain,
    Breadcrumb
}
}
</script>
<style></style>
