<template>
  <div id="navbar">
    <NavbarVue />
  </div>
  <div id="body">
    <div id="sidebar">
      <SidebarVue />
    </div>
    <div id="content">
      <ProfileVue />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from 'vue';
  import NavbarVue from '../components/partails/Navbar.vue';
  import SidebarVue from '../components/partails/Sidebar.vue';
  import ProfileVue from '../contents/Profile.vue';

  export default defineComponent ({
    components: {
      NavbarVue,
      SidebarVue,
      ProfileVue
    }
  });
</script>
<style>
  #body {
    display: flex;
  }
</style>