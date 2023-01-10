<template>
    <div class="form">
        <div>
            <SignupVue />
        </div>
    </div>
</template>

<script>
import SignupVue from '../components/forms/Signup.vue';
export default {
    components: {
        SignupVue
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