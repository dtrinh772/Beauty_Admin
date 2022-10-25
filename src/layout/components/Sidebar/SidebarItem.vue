<template>
  <router-link :to="to" class="link" :class="{ active: isActive }" :name="name">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from '../../../store/modules/state'
export default defineComponent({
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: false },
    name: { type: String, required: true }
  },
  setup(props) {
    const route = useRoute()
    console.log('route path')
    console.log(route.path)
    console.log('props item')
    console.log(props.name)
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed }
  }
})
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
.link {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;
  color: white;
  text-decoration: none;
}
.link:hover {
  background-color: var(--sidebar-item-hover);
}
.link.active {
  background-color: var(--sidebar-item-active);
  color: black;
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
