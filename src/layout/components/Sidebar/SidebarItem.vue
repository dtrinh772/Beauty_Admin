<template>
  <router-link v-if="routes" :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        {{ item }}
      </span>
    </transition>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import { collapsed } from '../../../store/modules/state'

export default defineComponent({
  props: {
    to: { type: String, required: true },
    icon: { required: false },
    item: { required: true }
  },
  setup(props) {
    const routes = ref(props.item)
    console.log(props.icon)
    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed, routes }
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
}
.link .icon {
  flex-shrink: 0;
  width: 25px;
}
</style>
