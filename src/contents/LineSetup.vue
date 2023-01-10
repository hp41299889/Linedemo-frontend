<template>
  <a-layout class="content">
    <a-layout-content :style="{ margin: '24px 16px 0' }">
      <div class="content-sub">Line setup</div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
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

      const lineSetupRoute = () => {
        router.push({ name: 'lineSetup' });
      };
  
      return {
        selectedKeys: ref<string[]>(['1']),
        onCollapse,
        onBreakpoint,
        lineSetupRoute
      };
    },
  });
</script>
<style>
  .content {
    height: 873px;
    width: 1720px;
  }
  .content-sub {
    padding: 24px;
    height: 779px;
    background: #fff;
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
  }
  
  [data-theme='dark'] .site-layout-sub-header-background {
    background: #141414;
  }
</style>