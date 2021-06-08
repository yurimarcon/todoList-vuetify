<template>
    <v-text-field
    v-model="newTaskTitle"
    @click:append="addTask"
    @keyup.enter="addTask"
    class="pa-2"
    outlined
    label="Create task"
    append-icon="mdi-plus"
    hide-details
    clearable
  ></v-text-field>
</template>

<script>
export default {
  name: 'InputTask',
  data(){
      return{
        newTaskTitle:'',
      }
    },
    methods:{
      addTask(){
        this.$store.dispatch('addTask', this.newTaskTitle)
        this.newTaskTitle = ''
      },
    }
}
</script>

<style>

</style>