<template>
<div class="Home">
  <InputTask />
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
</div>
</template>

<script>
// import InputTask from '../components/Todo/InputTask.vue'

  export default {
    name: 'Todo',
    components: {
      'InputTask' : require('@/components/Todo/InputTask.vue').default,
      'ListTasks' : require('@/components/Todo/ListTasks.vue').default,
      'NoTasks' : require('@/components/Todo/NoTasks.vue').default
    },   
  }
</script>

<style>

</style>
