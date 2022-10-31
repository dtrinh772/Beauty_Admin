<template>
  <!-- <div v-if="item.children.length > 0">
    {{ item }}
  </div> -->
  <router-link v-if="name" :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
    <transition name="fade">
      <span v-if="!collapsed">
        {{ name }}
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
    name: { required: true },
    item: { type: Object, required: true }
  },
  setup(props) {
    const name = ref(props.name)
    console.log(props.item.children.length)
    const hasChild = () => {
      if (props.item.children) {
        const showingChildren = props.item.children.filter((r: any) => {
          if (r.meta && r.meta.hidden) {
            return false
          } else {
            return true
          }
        })
        return showingChildren.length
      }
      return 0
    }

    const route = useRoute()
    const isActive = computed(() => route.path === props.to)
    return { isActive, collapsed, name, hasChild }
  }
})
</script>

<style scoped>
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
