<template>
  <v-btn
  @click="$store.commit('toggleSorting')"
  class="button-done-sorting"
  color="primary"
  >
    並び替え
  </v-btn>
</template>

<script>
export default {
  name: "ButtonDoneSorting"
}
</script>

<style lang="sass">
  .button-done-sorting
    position: fixed
    bottom: 20px
    left: 50%
    transform: translateX(-50%)
</style>t