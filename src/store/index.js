import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import Localbase from "localbase"

let db = new Localbase('db');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: null,
    tasks:[],
    SnackBar:{
      show: false,
      text: ''
    },
    sorting : false
  },
  mutations: {
    search(state, value){
      state.search = value
    },
    addTask(state, newTask){
      state.tasks.push(newTask)
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
    setDateTask(state, taskInput){
      let taskMod = state.tasks.filter(hit => hit.id === taskInput.id)[0]
      taskMod.date = taskInput.date.toLocaleString()
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
    },
    setTasks(state, tasks){
      state.tasks = tasks
    },
    sortTask(state){
      state.sorting = !state.sorting;
    }
  },
  actions: {
    addTask({commit}, newTaskTitle){
      if(!newTaskTitle)return
      let task = {
        id:Date.now(),
        title: newTaskTitle,
        done:false,
        date: new Date()
      }
      db.collection('tasks').add(task).then(()=>{
        commit('addTask', task)
        commit('showSnackBar', 'Task added!')
      })
    },
    doneTask({commit, state}, id){
      commit('doneTask', id)
      let task = state.tasks.filter(task => task.id == id)[0];
      db.collection('tasks').doc({id: id}).update({
        done : task.done
      })
    },
    updateTask({commit}, task){
      if(!task.newTitle)return;
      commit('updateTask', task)      
      db.collection('tasks').doc({id:task.id}).update({
        title : task.newTitle
      })
      commit('showSnackBar', 'Task updated!')
    },
    deleteTask({commit}, id){
      commit('deleteTask', id)
      db.collection('tasks').doc({id:id}).delete();
      commit('showSnackBar', 'Task deleted!')
    },
    getTasks({commit}){
      db.collection('tasks').get().then(tasks=>{
        commit('setTasks', tasks);
      })
    },
    setDateTask({commit}, task){
      console.log(task)
      if(!task.date)return;
      commit('setDateTask', task)
      db.collection('tasks').doc({id: task.id}).update({
        date: task.date
      })
    },
  },
  getters:{
    taskFiltered(state){
      if(!state.search){
        return state.tasks
      }
      return state.tasks.filter(task => 
        task.title.toLowerCase().includes(state.search.toLowerCase()))
    }

  },
  modules: {
  }
})
