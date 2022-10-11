<template>
    <div>
        <Sidebar />
        <div>
            <Navbar />
            <AppMain />
        </div>
    </div>
</template>
<script lang="ts">
import Sidebar from "./components/Sidebar/Sidebar.vue";
import AppMain from "./components/AppMain.vue";
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
</style>