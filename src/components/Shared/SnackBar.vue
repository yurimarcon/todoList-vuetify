<template>
    <v-snackbar
      v-model="$store.state.SnackBar.show"
    >
      {{ $store.state.SnackBar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color=""
          text
          v-bind="attrs"
          @click="$store.commit('hiddeSnackBar')"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {

}
</script>

<style>

</style>