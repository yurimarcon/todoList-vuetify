<template>
<div class="Home">
  <div
    v-if="$store.state.tasks.length"
  >
    <ListTasks />
  </div>

  <div
    v-else
    class="noTasks"
  >
    <NoTasks />
  </div>
  <div>
    <BtnDrag 
    v-if="$store.state.sorting"
    />
  </div>
</div>
</template>

<script>
// import InputTask from '../components/Todo/InputTask.vue'

  export default {
    name: 'Todo',
    components: {
      'ListTasks' : require('@/components/Todo/ListTasks.vue').default,
      'NoTasks' : require('@/components/Todo/NoTasks.vue').default,
      'BtnDrag' : require('@/components/Todo/Dialogs/BtnDrag.vue').default
    },   
  }
</script>

<style scoped>

</style>
