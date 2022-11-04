<template>
  <div class="sidebar">
    <router-link to="/" tag="Home" class="items-center flex pl-5 pt-4">
      <img alt="VDIT Solutions" class="w-6" src="@/assets/images/logo2.png" />
      <span class="hidden xl:block text-white text-lg ml-3">VDIT Solutions</span>
    </router-link>
    <div class="sidebar__devider my-6"></div>
    <!-- <SidebarItem
      v-for="route in routes"
      :to="route.path"
      :name="route.meta.title"
      :icon="route.meta.icon"
      :item="route"
    /> -->
    <template
      v-for="(route, i) in routes"
      :key="i"
      class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
      id="menu"
    >
      <div>
        <router-link v-slot="{ href, navigate, isActive, isExactActive }" :to="route.path" class="link">
          <a
            :class="[isActive && 'active', isExactActive && 'active']"
            :href="href"
            class="menu-link"
            @click="navigate"
          >
            <span>{{ route.name }}</span>
          </a>
        </router-link>
      </div>
    </template>
    <!-- <router-link v-if="route" :to="to" class="link" :class="{ active: isActive }">
      <i class="icon" :class="icon" />
      <transition name="fade">
        <span v-if="!collapsed">
          {{ name }}
        </span>
      </transition>
    </router-link> -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import router from '../../../router/index'
import SidebarItem from './SidebarItem.vue'

export default defineComponent({
  components: { SidebarItem },
  setup() {
    let routes = router.getRoutes().map((r) => r)
    console.log(routes)
    const route = useRoute()
    return { routes }
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

<style scoped lang="scss">
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
  &__devider {
    position: relative;
    z-index: 10;
    height: 1px;
    width: 100%;
    background-color: #ffffff14;
  }
  .link {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    font-weight: 400;
    font-size: initial;
    user-select: none;
    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 2em 0.25em 0.25em 2em;
    height: 3em;
    color: white;
    text-decoration: none;
  }
  .link:hover {
    background-color: var(--sidebar-item-hover);
  }
  .link.active {
    background-color: var(--sidebar-item-active);
    color: black;
    &:before {
      content: '';
      width: 30px;
      height: 30px;
      margin-top: -30px;
      transform: rotate(90deg) scale(1.04);
      background-size: 100%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='259.51' height='259.52' viewBox='0 0 259.51 259.52'%3E%3Cpath id='Path_143' data-name='Path 143' d='M8659.507,423.965c-.167-2.608.05-5.319-.19-8.211-.084-1.012-.031-2.15-.118-3.12-.113-1.25-.1-2.682-.236-4.061-.172-1.722-.179-3.757-.365-5.394-.328-2.889-.478-5.857-.854-8.61-.509-3.714-.825-7.252-1.38-10.543-.934-5.535-2.009-11.312-3.189-16.692-.855-3.9-1.772-7.416-2.752-11.2-1.1-4.256-2.394-8.149-3.687-12.381-1.1-3.615-2.366-6.893-3.623-10.493-1.3-3.739-2.917-7.26-4.284-10.7-1.708-4.295-3.674-8.078-5.485-12.023-1.145-2.493-2.5-4.932-3.727-7.387-1.318-2.646-2.9-5.214-4.152-7.518-1.716-3.16-3.517-5.946-5.274-8.873-1.692-2.818-3.589-5.645-5.355-8.334-2.326-3.542-4.637-6.581-7.039-9.848-2.064-2.809-4.017-5.255-6.088-7.828-2.394-2.974-4.937-5.936-7.292-8.589-3.027-3.411-6.049-6.744-9.055-9.763-2.4-2.412-4.776-4.822-7.108-6.975-3-2.767-5.836-5.471-8.692-7.854-3.332-2.779-6.657-5.663-9.815-8.028-2.958-2.216-5.784-4.613-8.7-6.6-3.161-2.159-6.251-4.414-9.219-6.254-3.814-2.365-7.533-4.882-11.168-6.89-4.213-2.327-8.513-4.909-12.478-6.834-4.61-2.239-9.234-4.619-13.51-6.416-4.1-1.725-8.11-3.505-11.874-4.888-4.5-1.652-8.506-3.191-12.584-4.47-6.045-1.9-12.071-3.678-17.431-5-9.228-2.284-17.608-3.757-24.951-4.9-7.123-1.112-13.437-1.64-18.271-2.035l-2.405-.2c-1.638-.136-3.508-.237-4.633-.3a115.051,115.051,0,0,0-12.526-.227h259.51Z' transform='translate(-8399.997 -164.445)' fill='%23f1f5f8'/%3E%3C/svg%3E%0A");
      @apply absolute top-0 right-0 -mr-5;
    }
    &:after {
      content: '';
      width: 30px;
      height: 30px;
      margin-top: 50px;
      transform: scale(1.04);
      background-size: 100%;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='259.51' height='259.52' viewBox='0 0 259.51 259.52'%3E%3Cpath id='Path_143' data-name='Path 143' d='M8659.507,423.965c-.167-2.608.05-5.319-.19-8.211-.084-1.012-.031-2.15-.118-3.12-.113-1.25-.1-2.682-.236-4.061-.172-1.722-.179-3.757-.365-5.394-.328-2.889-.478-5.857-.854-8.61-.509-3.714-.825-7.252-1.38-10.543-.934-5.535-2.009-11.312-3.189-16.692-.855-3.9-1.772-7.416-2.752-11.2-1.1-4.256-2.394-8.149-3.687-12.381-1.1-3.615-2.366-6.893-3.623-10.493-1.3-3.739-2.917-7.26-4.284-10.7-1.708-4.295-3.674-8.078-5.485-12.023-1.145-2.493-2.5-4.932-3.727-7.387-1.318-2.646-2.9-5.214-4.152-7.518-1.716-3.16-3.517-5.946-5.274-8.873-1.692-2.818-3.589-5.645-5.355-8.334-2.326-3.542-4.637-6.581-7.039-9.848-2.064-2.809-4.017-5.255-6.088-7.828-2.394-2.974-4.937-5.936-7.292-8.589-3.027-3.411-6.049-6.744-9.055-9.763-2.4-2.412-4.776-4.822-7.108-6.975-3-2.767-5.836-5.471-8.692-7.854-3.332-2.779-6.657-5.663-9.815-8.028-2.958-2.216-5.784-4.613-8.7-6.6-3.161-2.159-6.251-4.414-9.219-6.254-3.814-2.365-7.533-4.882-11.168-6.89-4.213-2.327-8.513-4.909-12.478-6.834-4.61-2.239-9.234-4.619-13.51-6.416-4.1-1.725-8.11-3.505-11.874-4.888-4.5-1.652-8.506-3.191-12.584-4.47-6.045-1.9-12.071-3.678-17.431-5-9.228-2.284-17.608-3.757-24.951-4.9-7.123-1.112-13.437-1.64-18.271-2.035l-2.405-.2c-1.638-.136-3.508-.237-4.633-.3a115.051,115.051,0,0,0-12.526-.227h259.51Z' transform='translate(-8399.997 -164.445)' fill='%23f1f5f8'/%3E%3C/svg%3E%0A");
      @apply absolute top-0 right-0 -mr-5;
    }
  }
}
</style>
