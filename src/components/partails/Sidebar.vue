<template>
  <a-layout>
    <a-layout-sider>
      <div class="logo" />
      <a-menu :selectedKeys="[$route.path]" @click="handleClick" theme="dark" mode="inline">
        <a-menu-item key="/profile">
          <user-outlined />
          <span class="nav-text">profile</span>
        </a-menu-item>
        <a-menu-item key="/lineSetup">
          <video-camera-outlined />
          <span class="nav-text">lineSetup</span>
        </a-menu-item>
        <!-- <a-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </a-menu-item>
        <a-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </a-menu-item> -->
      </a-menu>
    </a-layout-sider>
  </a-layout>
</template>
<script lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import 'ant-design-vue/dist/antd.css'
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const handleClick = item => {
      if (item.key !== route.path) {
        router.push(item.key);
      };
    };

    const profileRoute = () => {
      router.push({ name: 'profile' });
    };

    const lineSetupRoute = () => {
      router.push({ name: 'lineSetup' });
    };

    return {
      selectedKeys: ref<string[]>(['1']),
      handleClick,
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