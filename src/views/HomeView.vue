<template>
  <div v-if="this.todoList.length">
    <!-- {{ completedTasks }} -->
    <!--  {{ todosItem }} -->
    <h2>Your tasks</h2>
    <TodoList
      :todos="this.todoList"
      @edit-val="SelectEditTaskValue"
      @copy-todo="moveTaskToCompleted"
      @delete-todo="deleteItem"
    />
  </div>
  <div v-else>
    <h1>You have no task</h1>
  </div>
  <div class="form-wrapper" v-if="Object.keys(this.todosItem).length">
    <button
      class="btn btn_warning close-form"
      @click="this.set({ todosItem: '' })"
    >
      Close
    </button>
    <InputForm @submit-value="editTask" :value="task.value">
      Change task
    </InputForm>
  </div>
  <div class="form-wrapper" v-else>
    <InputForm @submit-value="addTask">New task</InputForm>
  </div>
</template>
<script>
import TodoList from '@/components/TodoList.vue';
import InputForm from '@/components/InputForm.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {
  components: {
    TodoList,
    InputForm,
  },
  computed: {
    ...mapGetters('todo', ['todoList', 'task', 'todosItem', 'completedTasks']),
  },
  methods: {
    ...mapMutations('todo', [
      'set',
      'addNewTodo',
      'deleteActiveTask',
      'addCompletedTask',
      'changeTodo',
      'addItem',
    ]),
    addTask(value) {
      this.addNewTodo(value);
      this.SetlocalStorage('tasks', this.todoList);
      this.set({ task: '' });
    },
    SelectEditTaskValue({ index, value }) {
      this.set({ task: value });
      this.set({ todosItem: { index, value } });
    },
    editTask(value) {
      this.todosItem[this.todosItem.index] = value;
      this.changeTodo({ index: this.todosItem.index, value: value.value });
      this.set({ todosItem: '' });
    },
    deleteItem(index) {
      this.deleteActiveTask(index);
      this.SetlocalStorage('tasks', this.todoList);
    },
    moveTaskToCompleted(todo, index) {
      this.addCompletedTask(todo);
      this.deleteActiveTask(index);
      this.SetlocalStorage('completedTodo', this.completedTasks);
      this.SetlocalStorage('tasks', this.todoList);
    },
    SetlocalStorage(key, arr) {
      localStorage.setItem(key, JSON.stringify(arr));
    },
  },
};
</script>
