<template>
    <div class="canvas">
        <div class="content">
            <Register />
        </div>
    </div>
</template>

<script>
import Register from '../components/forms/Register.vue';
export default {
    components: {
        Register
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