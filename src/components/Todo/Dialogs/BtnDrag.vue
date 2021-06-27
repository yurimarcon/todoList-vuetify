<template>
    <v-btn
    id="btnDrag"
    elevation="8"
    color="primary"
    @click="$store.commit('sortTask')"
    >
      Done
    </v-btn>
</template>

<script>
export default {
    name: "BtnDrag"
}
</script>

<style>
#btnDrag{
    position: fixed;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  
}
</style>