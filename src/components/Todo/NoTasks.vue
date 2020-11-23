<template>
  <div
      class="no-tasks"
  >
    <v-icon
        size="100px"
        class="ml-10"
        color="primary darker-2"
    >mdi-check
    </v-icon>
    <div class="text-h5 primary--text">タスクがありません</div>
  </div>
</template>

<script>
export default {
  name: "NoTasks"
}
</script>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
</style>
