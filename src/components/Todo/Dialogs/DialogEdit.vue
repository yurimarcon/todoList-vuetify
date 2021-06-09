<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
    <v-card>
        <v-card-title class="text-h5">
          Edit Task?
        </v-card-title>
        <v-card-text>
          New title
          <v-text-field 
          class="bg-color-input"
          v-model="newTitle"
          @keyup.enter="$store.dispatch('updateTask', {id:task.id, newTitle}) & $emit('close')"
          />      
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            color="red darken-3" 
            text
            :disabled = "!newTitle || newTitle.toLowerCase() === task.title.toLowerCase()"
            @click="$store.dispatch('updateTask', {id:task.id, newTitle}) & $emit('close')"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'DialogDelete',
    props:['task'],
    data(){
      return{
        newTitle:this.task.title
      }
    },
}
</script>

<style>
  .bg-color-input{
    background-color:rgba(30, 143, 255, 0.089);
    border-radius: 10px;
    height: 50px;
    padding-left: 20px;
  }
</style>