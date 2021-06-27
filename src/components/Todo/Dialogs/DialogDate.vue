<template>
    <v-dialog
        ref="dialog"
        :value="true"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <v-date-picker
          v-model="date"
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="$emit('close')"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$store.dispatch('setDateTask', {id:task.id, date}) & $emit('close')"
          >
            OK
          </v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script>
export default {
    props:['task'],
    data(){
        return{
            date:null
        }
    },
    mounted(){
        console.log(this.task);
      if(this.task.date){
        let date = this.task.date.getFullYear() + '-' + (this.task.date.getMonth()+1) + '-' +this.task.date.getDate();
        this.date = date
      }

    }

}
</script>

<style>

</style>