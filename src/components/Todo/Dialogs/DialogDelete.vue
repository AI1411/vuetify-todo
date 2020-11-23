<template>
  <v-dialog
      :value="true"
      persistent
      max-width="290"
  >
    <v-card>
      <v-card-title class="headline">
        タスクを削除しますか？
      </v-card-title>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            @click="$emit('close')"
            text
        >
          いいえ
        </v-btn>

        <v-btn
            @click="$store.dispatch('deleteTask', task.id)"
            color="green darken-1"
            text
        >
          はい
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['task']
}
</script>

<style scoped>

</style>