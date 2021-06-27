<template>
<div>
    <v-list-item
        @click="$store.dispatch('doneTask', task.id)"
        :class="{'blue lighten-5' : task.done }"
        class="white"
        :ripple="false"
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
                    {{task.date | dataAtualFormatada}}
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
    filters:{
        dataAtualFormatada(value){
            // if(!value)value = new Date
            var data = new Date(new Date(value).getTime() + 1000 * 60 * 60 * 24 * 1),
            dia  = data.getDate(new Date()).toString(),
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
.sortable-ghost{
    opacity: 0;
    box-shadow: 10px 5px 5px red !important;
}
.sortable-chosen{
    
    box-shadow: 5px 10px #888888;
}
</style>