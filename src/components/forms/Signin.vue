<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item>
      <a-form-item name="remember" no-style>
        <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
      </a-form-item>
      <a class="login-form-forgot" href="">Forgot password</a>
    </a-form-item>

    <a-form-item>
      <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
      Or
      <a href="" @click="signupRoute">signup now!</a>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
};
const signinUrl = 'http://localhost:8080/signin';
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const router = useRouter();
    const handleFinish = async (values: FormState) => {
      const data = {
        username: values.username,
        password: values.password
      };
      const res = await axios({
        method: 'POST',
        url: signinUrl,
        data: data
      });
      console.log('Success:', values);
      console.log('res:', res);
      if(res) {
        const { data} = res;
        const {status} = data;
        if(status == 'success') {
          router.push({ name: 'profile' });
        };
      };
    };

    const handleFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    const signupRoute = () => {
      router.push({ name: 'signup' });
    };
    const disabled = computed(() => {
      return !(formState.username && formState.password);
    });
    return {
      formState,
      handleFinish,
      handleFinishFailed,
      disabled,
      signupRoute
    };
  },
});
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>
