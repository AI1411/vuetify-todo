import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: null,
    tasks: [
      {
        id: 1,
        title: "起床",
        done: false,
        dueDate: '2020-10-16'
      },
      {
        id: 2,
        title: "朝ごはん",
        done: false,
        dueDate: '2020-10-22'
      },
      {
        id: 3,
        title: "歯磨き",
        done: false,
        dueDate: '2020-10-24'
      }
    ],
    snackbar: {
      show: false,
      text: '',
      dueDate: '2020-10-16'
    }
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDate: null
      }
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter(task => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    updateTaskTitle(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.title = payload.title;
    },
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter(task => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout)
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    }
  },
  actions: {
    addTask({commit}, newTaskTitle) {
      commit('addTask', newTaskTitle);
      commit('showSnackbar', 'タスクを追加しました');
    },
    deleteTask({commit}, id) {
      commit('deleteTask', id);
      commit('showSnackbar', 'タスクを削除しました');
    },
    updateTaskTitle({commit}, payload) {
      commit('updateTaskTitle', payload);
      commit('showSnackbar', '編集しました')
    },
    updateTaskDueDate({commit}, payload) {
      commit('updateTaskDueDate', payload);
      commit('showSnackbar', '期限を設定しました')
    }
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter(task => task.title.toLowerCase().includes(state.search));
    }
  }
})
