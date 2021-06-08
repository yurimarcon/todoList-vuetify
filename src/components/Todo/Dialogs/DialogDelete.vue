<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
    >
    <v-card>
        <v-card-title class="text-h5">
          Delete Task?
        </v-card-title>
        <v-card-text>Are you sure delete this task and not reused.</v-card-text>
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
            @click="$store.dispatch('deleteTask', task.id)"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'DialogDelete',
    props:['task']
}
</script>

<style>

</style>