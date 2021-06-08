<template>
    <v-list
    class="pa-0"
    flat
    >
        <v-list-item-group
        active-class=""
        >
            <Task 
            v-for="task in $store.state.tasks"
            :key="task.id"
            :task="task"
            />

        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    name: 'List',
    components: {
        'Task' : require('@/components/Todo/Task.vue').default
    }
}
</script>

<style>

</style>