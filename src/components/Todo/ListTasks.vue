<template>
    <v-list
    class="pa-0"
    flat
    >
        <v-list-item-group
        active-class=""
        >
            <draggable 
            :list="tasks" 
            handle=".handle"
            >
                <Task 
                v-for="task in tasks"
                :key="task.id"
                :task="task"
                />

            </draggable>
        </v-list-item-group>
    </v-list>
</template>

<script>
import draggable from "vuedraggable";

export default {
    name: 'List',
    components: {
        'Task' : require('@/components/Todo/Task.vue').default,
        draggable
    },
    computed: {
        tasks: {
            get() {
                return this.$store.getters.taskFiltered
            },
            set(value) {
                console.log('salvouORdem');
                this.$store.commit('setNewOrderTasks', value)
            }
        }   
    }

}
</script>

<style>

</style>