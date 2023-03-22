export default {
  namespaced: true,
  state: {
    task: {},
    todosItem: {},
    todoList: [],
    completedTasks: [],
  },
  mutations: {
    set(state, updatedState) {
      for (const key in updatedState) {
        state[key] = updatedState[key];
      }
    },
    addNewTodo(state, value) {
      state.todoList.push(value);
    },
    addCompletedTask(state, todo) {
      state.completedTasks.push(todo);
    },
    addActiveTask(state, todo) {
      state.todoList.push(todo);
    },
    changeTodo(state, item) {
      state.todoList[item.index].value = item.value;
    },
    deleteActiveTask(state, index) {
      state.todoList.splice(index, 1);
    },
    deleteCompletedTask(state, index) {
      state.completedTasks.splice(index, 1);
    },
  },
  getters: {
    todoList: (state) => state.todoList,
    task: (state) => state.task,
    todosItem: (state) => state.todosItem,
    completedTasks: (state) => state.completedTasks,
  },
  actions: {},
};
