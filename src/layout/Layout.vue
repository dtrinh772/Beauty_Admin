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
<style>
.main-vdit{
  overflow-x: hidden;
    padding: 0.75rem 2rem;
    font-size: .875rem;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-slate-800) / var(--tw-text-opacity));
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
