<template>
    <div class="form">
        <div>
            <SigninVue />
        </div>
    </div>
</template>

<script>
import SigninVue from '../components/forms/Signin.vue';
export default {
    components: {
        SigninVue
    }
}
</script>

<style>
.form {
    display: flex;
    min-height: 768px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;   
}
</style>