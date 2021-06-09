import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:[
      {
        id:'1',
        title: "wake up",
        done: false,
        date: '2021-06-08'
      },
      {
        id:'2',
        title: "Get Bannanas",
        done: false,
        date: '2021-06-08'
      },
      {
        id:'3',
        title: "Eat bannanas",
        done: false,
        date: '2021-06-08'
      },
    ],
    SnackBar:{
      show: false,
      text: ''
    }
  },
  mutations: {
    addTask(state, newTaskTitle){
      if(!newTaskTitle)return
      state.tasks.push(
        {
          id:Date.now(),
          title: newTaskTitle,
          done:false
        }
      )
    },
    updateTask(state, taskInput){
      if(!taskInput.newTitle)return
      let taskMod = state.tasks.filter(hit => hit.id === taskInput.id)[0]
      console.log(taskMod)
      taskMod.title = taskInput.newTitle
    },
    doneTask(state, id){
      let done = state.tasks.filter(hit => hit.id === id)[0]
      done.done = !done.done
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter(hit => hit.id !== id)
    },
    showSnackBar(state, text){
      let timeout = 0
      if(state.SnackBar.show){
        state.SnackBar.show = false
        timeout = 300
      }
      setTimeout(()=>{
        state.SnackBar.show = true;
        state.SnackBar.text = text;

      }, timeout)
    },
    hiddeSnackBar(state){
      state.SnackBar.show = false;
    }
  },
  actions: {
    addTask({commit}, newTaskTitle){
      if(!newTaskTitle)return
      commit('addTask', newTaskTitle)
      commit('showSnackBar', 'Task added!')
    },
    updateTask({commit}, task){
      console.log(task)
      commit('updateTask', task)
      commit('showSnackBar', 'Task updated!')
    },
    deleteTask({commit}, id){
      commit('deleteTask', id)
      commit('showSnackBar', 'Task deleted!')
    }
  },
  modules: {
  }
})
