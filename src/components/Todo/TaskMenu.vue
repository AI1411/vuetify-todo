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
    <dialog-edit
        v-if="dialogs.edit"
        @close="dialogs.edit = false"
        :task="task"
    />
    <dialog-delete
        v-if="dialogs.delete"
        @close="dialogs.delete = false"
        :task="task"
    />
  </div>
</template>

<script>
import DialogDelete from "@/components/Todo/Dialogs/DialogDelete";
import DialogEdit from "@/components/Todo/Dialogs/DialogEdit";
export default {
  props: ['task'],
  components: {
    'dialog-delete': DialogDelete,
    'dialog-edit': DialogEdit,
  },
  data: () => ({
    dialogs: {
      edit: false,
      delete: false,
    },
    items: [
      {
        title: '編集',
        icon: 'mdi-pencil',
        click() {
          this.dialogs.edit = true;
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