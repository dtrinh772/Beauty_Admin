<template>
  <div class="container-fluid main-vdit">
    <div class="row flex">
      <div>
        <Sidebar />
      </div>
      <transition name="fade">
        <div class="py-3 app-main" :style="{ 'margin-left': sidebarWidth }">
          <Breadcrumb />
          <AppMain />
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import Sidebar from './components/Sidebar/Sidebar.vue'
import AppMain from './components/AppMain.vue'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue'
import { sidebarWidth } from '../store/modules/state'

export default {
  components: {
    Sidebar,
    AppMain,
    Breadcrumb
  },
  setup() {
    return { sidebarWidth }
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
