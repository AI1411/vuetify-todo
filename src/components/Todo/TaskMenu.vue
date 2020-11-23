<template>
  <div>
    <v-menu
        bottom
        left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            icon
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="handleClick(index)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <dialog-delete
        v-if="dialogs.delete"
        @close="dialogs.delete = false"
        :task="task"
    />
  </div>
</template>

<script>
import DialogDelete from "@/components/Todo/Dialogs/DialogDelete";
export default {
  props: ['task'],
  components: {
    'dialog-delete': DialogDelete
  },
  data: () => ({
    dialogs: {
      delete: false,
    },
    items: [
      {
        title: '編集',
        icon: 'mdi-pencil',
        click() {
          console.log('edit')
        }
      },
      {
        title: '期限',
        icon: 'mdi-calendar',
        click() {
          console.log('date')
        }
      },
      {
        title: '削除',
        icon: 'mdi-delete',
        click() {
          this.dialogs.delete = true;
        }
      },
    ],
  }),
  methods: {
    handleClick(index) {
      this.items[index].click.call(this);
    }
  },
}
</script>
<style scoped>

</style>