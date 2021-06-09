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
        newTitle:''
      }
    },
}
</script>

<style>

</style>