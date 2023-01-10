<template>
  <a-layout>
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      class="sider"
    >
      <div class="logo"></div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1" @click="profileRoute">
          <user-outlined />
          <span class="nav-text">Profile</span>
        </a-menu-item>
        <a-menu-item key="2" @click="lineSetupRoute">
          <video-camera-outlined />
          <span class="nav-text">Line setup</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </a-layout>
</template>
<script lang="ts">
  import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import 'ant-design-vue/dist/antd.css'
  export default defineComponent({
    components: {
      UserOutlined,
      VideoCameraOutlined,
      UploadOutlined,
    },
    setup() {
      const router = useRouter();
      const onCollapse = (collapsed: boolean, type: string) => {
        console.log(collapsed, type);
      };

      const onBreakpoint = (broken: boolean) => {
        console.log(broken);
      };

      const profileRoute = () => {
        router.push({ name: 'profile' });
      };

      const lineSetupRoute = () => {
        router.push({ name: 'lineSetup' });
      };

      return {
        selectedKeys: ref<string[]>(['1']),
        onCollapse,
        onBreakpoint,
        profileRoute,
        lineSetupRoute
      };
    },
  });
</script>
<style>
  .sider {
    height: 873px;
  }
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }

  .site-layout-sub-header-background {
    background: #fff;
  }

  .site-layout-background {
    background: #fff;
    height: 800px;
  }

  [data-theme='dark'] .site-layout-sub-header-background {
    background: #141414;
  }
</style>