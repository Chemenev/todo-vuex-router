<template>
  <div v-if="this.completedTasks.length">
    <h2>Completed tasks</h2>
    <TodoList
      :todos="this.completedTasks"
      :isChecked="isChecked"
      @copy-todo="moveTaskToActive"
      @delete-todo="deleteComplitedTask"
    />
  </div>
  <div v-else>
    <h1>You don't have a completed task</h1>
  </div>
</template>
<script>
import TodoList from '@/components/TodoList.vue';
import { mapGetters, mapMutations } from 'vuex';
import router from '@/router';
export default {
  data() {
    return {
      isChecked: true,
    };
  },
  components: {
    TodoList,
  },
  computed: {
    ...mapGetters('todo', ['todoList', 'completedTasks']),
  },
  methods: {
    ...mapMutations('todo', ['addActiveTask', 'deleteCompletedTask']),
    moveTaskToActive(todo, index) {
      this.addActiveTask(todo);
      this.deleteCompletedTask(index);
      this.SetlocalStorage('completedTodo', this.completedTasks);
      this.SetlocalStorage('tasks', this.todoList);
      if (!this.completedTasks.length) {
        router.push({ name: 'home' });
      }
    },
    deleteComplitedTask(index) {
      this.deleteCompletedTask(index);
      this.SetlocalStorage('completedTodo', this.completedTasks);
      if (!this.completedTasks.length) {
        router.push({ name: 'home' });
      }
    },
    SetlocalStorage(key, arr) {
      localStorage.setItem(key, JSON.stringify(arr));
    },
  },
};
</script>
