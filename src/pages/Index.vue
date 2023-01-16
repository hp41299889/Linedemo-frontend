<template>
    <div id="navbar">
        <NavbarVue />
    </div>
    <div id="body">
        <div id="sidebar">
            <SidebarVue />
        </div>
        <div id="content">
            <RouterView />
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import NavbarVue from '../components/partails/Navbar.vue';
import SidebarVue from '../components/partails/Sidebar.vue';
import LineSetupVue from '../contents/LineSetup.vue';

export default defineComponent({
    components: {
        NavbarVue,
        SidebarVue,
        LineSetupVue
    }
});
</script>
<style>
#body {
    display: flex;
}
</style>