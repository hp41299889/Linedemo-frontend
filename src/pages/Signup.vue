<template>
    <div class="canvas">
        <div class="content">
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
.canvas {
    display: flex;
    min-height: 768px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;   
}
</style>