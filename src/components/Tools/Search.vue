<template>
  <v-text-field
    class="expanding-search mt-1"
    :class="{close: !showSearch && !$store.state.search}"
    @focus="showSearch = !showSearch"
    @blur="hiddeSearch()"
    :value="$store.state.search"
    @input="$store.commit('search', $event)"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    filled
    dense
    clearable
  ></v-text-field>
</template>

<script>
export default {
    name: 'Search',
    data(){
      return{
        showSearch: false,
        textSearch:''
      }
    },
    methods:{
      hiddeSearch(){
        this.showSearch = !this.showSearch
        this.textSearch = ''
      }
    }
}
</script>

<style >

  .v-input__slot {
    border-radius: 10px !important;
  }
  .expanding-search, .v-input__slot, :before,:after{
    transition: max-width .5s;
    border-color: transparent !important
  }
  .close{
    max-width: 45px !important;
  }

    
</style>