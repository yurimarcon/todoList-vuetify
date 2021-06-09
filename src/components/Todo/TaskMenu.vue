<template>
<div>
    <v-menu
    bottom
    left
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            >
            <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="handleClick(i)"
            >
            <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
    <DialogDelete 
    v-if="dialog.delete"
    :task="task" 
    @close="dialog.delete = false"
    />
    <DialogEdit 
    v-if="dialog.edit"
    :task="task" 
    @close="dialog.edit = false"
    />
</div>
</template>

<script>
export default {
    name: 'TaskMenu',
    props:['task'],
    components:{
        'DialogEdit': require('@/components/Todo/Dialogs/DialogEdit.vue').default,
        'DialogDelete': require('@/components/Todo/Dialogs/DialogDelete.vue').default,
    },
    data: () => ({
        dialog : {
            edit : false,
            delete : false,
        },
        items: [
        { 
            title: 'Editar',
            icon: 'mdi-pencil',
            click(){
                console.log(this.dialog.delete)
                this.dialog.edit = true
            }
        },
        { 
            title: 'Data',
            icon: 'mdi-calendar',
            click(){
                console.log('data')
            }
        },
        { 
            title: 'Excluir',
            icon: 'mdi-delete',
            click(){
                console.log(this.dialog.delete)
                this.dialog.delete = true
            }
        },
      ],
    }),
    methods:{
        handleClick(index){
            this.items[index].click.call(this)
        }
    }
}
</script>

<style>

</style>