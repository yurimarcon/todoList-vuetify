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
            <v-list-item-action>
                <v-list-item-action-text>
                    <v-icon small> mdi-calendar </v-icon>
                    {{dataAtualFormatada()}}
                </v-list-item-action-text>
            </v-list-item-action>
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
    methods:{
        dataAtualFormatada(){
            var data = new Date(this.task.date),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
            return diaF+"/"+mesF+"/"+anoF;
        }
    }
}
</script>

<style>

</style>