<template>
  <div class="container-fluid main-vdit">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
        <Sidebar />
      </div>
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
