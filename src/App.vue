<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app
    >
      <v-img
        class="px-6 pt-2"
        src="../public/bg.jpg"
        height="180"
        gradient="to top right, rgba(19,04,122,.5), rgba(128,104,199,.8)"
      >
        <center>
          <v-avatar
          size='130'
          >
            <img
              src="https://moddroid.com/wp-content/uploads/2021/04/tasks.png"
              alt="TodoList"
            >
          </v-avatar>
          <div 
          class="white--text text-subtitle-1 font-weight-bold mt-2"
          >
            Todo List
          </div>
        </center>
      </v-img>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="../public/bg.jpg"
      prominent
      height="180px"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,04,122,.5), rgba(128,104,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>
        <div 
        class="text-h5" 
        >
          Vuetify todo
        </div>
        <div>
          <InputTask 
          
          style="padding: 0 !important; margin-top: 5%"
          width="100%"
          id="createTaskInput"
          />
        </div>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <Search />

    </v-app-bar>
    <v-main>
        <router-view></router-view>
        <SnackBar />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    components:{
      'Search' : require('@/components/Tools/Search.vue').default,
      'SnackBar' : require('@/components/Shared/SnackBar.vue').default,
      'InputTask' : require('@/components/Todo/InputTask.vue').default
    },
    data: () => ({ 
      drawer: null,
      items: [
        { title: 'Tarefas', icon: 'mdi-format-list-checks', to:'/' },
        { title: 'Sobre', icon: 'mdi-help-box', to:'/about' },
      ],
      right: null,  
    }),
    mounted(){
      this.$store.dispatch('getTasks')
    }
  }
</script>

<style scoped>
#createTask{
  min-width: 90% !important;
}
#createTaskInput{
  min-width: 100% !important;
}
</style>