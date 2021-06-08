<template>
<div>
    <v-list-item
        @click="$store.commit('doneTask', task.id)"
        :class="{'blue lighten-5' : task.done }"
        >
        <template v-slot:default>
            <v-list-item-action>
                <v-checkbox 
                :input-value="task.done"
                color="primary"
                ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title
                :class="{'text-decoration-line-through' : task.done}"
                >
                    {{task.title}}
                </v-list-item-title>
            </v-list-item-content>
            <!-- <v-list-item-action
            @click="dialog.delete = true"
            icon
            >
                <v-btn icon>
                    <v-icon color="primary">mdi-trash-can-outline</v-icon>
                </v-btn>
            </v-list-item-action> -->
            <TaskMenu
            :task="task"
            />
        </template>
    </v-list-item>
    <v-divider></v-divider>
</div>
</template>

<script>
export default {
    name: "Task",
    props: ['task'],
    components:{
        'TaskMenu': require('@/components/Todo/TaskMenu.vue').default
    },
}
</script>

<style>

</style>