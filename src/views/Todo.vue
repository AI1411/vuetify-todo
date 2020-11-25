<template>
  <div class="home">
    <field-add-task/>
    <list-tasks
        v-if="$store.state.tasks.length"
    />
    <no-tasks
        v-else
    />
    <button-done-sorting
    v-if="$store.state.sorting"
    />
  </div>
</template>

<script>
import FieldAddTask from "@/components/Todo/FieldAddTask";
import ListTasks from "@/components/Todo/ListTasks";
import NoTasks from "@/components/Todo/NoTasks";
import ButtonDoneSorting from "@/components/Todo/ButtonDoneSorting";

export default {
  name: 'Todo',
  components: {
    'field-add-task': FieldAddTask,
    'list-tasks': ListTasks,
    'no-tasks': NoTasks,
    'button-done-sorting': ButtonDoneSorting
  }
}
</script>
