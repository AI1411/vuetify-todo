import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "起床",
        done: false
      },
      {
        id: 2,
        title: "朝ごはん",
        done: false
      },
      {
        id: 3,
        title: "歯磨き",
        done: false
      }
    ],
    snackbar: {
      show: false,
      text: ''
    }
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false
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
    }
  },
  getters: {

  }
})
