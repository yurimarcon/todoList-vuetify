<template>
<div class="noTasks">
    <div class="animate__animated animate__fadeInUp">
        <v-icon
            size="100"
            color="primary"
        >
            mdi-check-circle
        </v-icon>
        <div
            class="text-h5 primary--text"
        >
            No Tasks
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.noTasks{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: .5;
    animation: 3s;
}
</style>