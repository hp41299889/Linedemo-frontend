<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    :rules="rules"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
    @validate="handleValidate"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item has-feedback label="Confirm" name="checkPass">
      <a-input v-model:value="formState.checkPass" type="password" autocomplete="off" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import type { Rule } from 'ant-design-vue/es/form';
import { defineComponent, reactive, ref } from 'vue';
import type { FormInstance } from 'ant-design-vue';
import axios from 'axios';

interface FormState {
  username: string;
  password: string;
  checkPass: string;
};

const signupUrl = 'http://localhost:8080/user';

export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>();
    const formState = reactive<FormState>({
      username: '',
      password: '',
      checkPass: ''
    });

    let validatePass = async (_rule: Rule, value: string) => {
      if (value === '') {
        return Promise.reject('Please input the password');
      } else {
        if (formState.checkPass !== '') {
          formRef.value?.validateFields('checkPass');
        }
        return Promise.resolve();
      }
    };

    let validatePass2 = async (_rule: Rule, value: string) => {
      if (value === '') {
        return Promise.reject('Please input the password again');
      } else if (value !== formState.password) {
        return Promise.reject("Two inputs don't match!");
      } else {
        return Promise.resolve();
      }
    };

    const rules: Record<string, Rule[]> = {
      pass: [{ required: true, validator: validatePass, trigger: 'change' }],
      checkPass: [{ validator: validatePass2, trigger: 'change' }],
    };

    const handleFinish = async (values: FormState) => {
      const data = {
        username: values.username,
        password: values.password
      };
      const res = await axios({
        method: 'POST',
        url: signupUrl,
        data: data
      });
      console.log(values);
      console.log(res);
    };
    const handleFinishFailed = errors => {
      console.log(errors);
    };
    const handleValidate = (...args) => {
      console.log(args);
    };

    return {
      formState,
      formRef,
      rules,
      handleFinishFailed,
      handleFinish,
      handleValidate,
    };
  },
});
</script>

