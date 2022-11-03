<template>
  <!-- <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <img alt="VDIT Solutions" class="w-6" style="position: fixed" src="@/assets/images/logo2.png" />
      </span>
      <span v-else>VDIT Solutions</span>
    </h1>
    <SidebarItem
      v-for="route in routes"
      :to="route.path"
      :name="route.meta.title"
      :icon="route.meta.icon"
      :item="route"
    />
    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
      <i class="bi bi-arrow-right" />
    </span>
  </div> -->
  <nav class="side-nav">
    <router-link to="/" tag="a" class="intro-x flex items-center pl-5 pt-4">
      <img alt="VDIT" class="w-6" src="@/assets/images/logo2.png" />
      <span class="hidden xl:block text-white text-lg ml-3"> Rubick </span>
    </router-link>
    <div class="side-nav__devider my-6"></div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '../../../router/index'
import SidebarItem from './SidebarItem.vue'
import { collapsed, toggleSidebar, sidebarWidth } from '../../../store/modules/state'

export default defineComponent({
  components: { SidebarItem },
  setup() {
    let routes = router.getRoutes().map((r) => r)
    console.log(routes)
    // let hasChild = routes
    //   .filter((r) => r.meta.hidden !== true)
    //   .map((r) => {
    //     return { name: r.name, path: r.path, icon: r.meta.icon }
    //   })
    return { collapsed, toggleSidebar, sidebarWidth, routes }
  }
})
</script>

<style>
:root {
  --sidebar-bg-color: #1e40af;
  --sidebar-item-hover: #2e4cad;
  --sidebar-item-active: white;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
