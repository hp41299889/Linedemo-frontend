<template>
    <a-layout-header class="login">
      <a-button class="navbar-button">Default Button</a-button>
      <a-button class="navbar-button" @click="signout">Sign out</a-button>
  </a-layout-header>
</template>
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  const signoutUrl = 'http://localhost:8080/signout';
  export default defineComponent({
    setup() {
      const router = useRouter();

      const signout = async () => {
        const res = await axios({
          method: 'GET',
          url: signoutUrl,
        });
        if(res) {
          const {data}=res;
          const {status} = data;
          if(status == 'success') {
            router.push({name: 'signin'});
          };
        };
      };

      return {
        selectedKeys: ref<string[]>(['2']),
          signout
      };
    },
  });
  </script>
  <style>
  .navbar-button {
    margin: 4px;
  }
  .login {
    display: flex;
    justify-content: end;
    align-items: center;
    justify-self: center;
  }
  .site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
  }
  #components-layout-demo-top .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
  .ant-row-rtl #components-layout-demo-top .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  
  [data-theme='dark'] .site-layout-content {
    background: #141414;
  }
  </style>
  