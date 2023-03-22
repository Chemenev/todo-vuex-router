<template>
  <nav class="menu">
    <router-link to="/" class="menu__item">
      Active tasks
      <span class="menu__count" v-if="this.todoList.length">
        {{ todoList.length }}
      </span>
    </router-link>
    <router-link class="menu__item" to="/completedtasks/">
      Completed tasks
      <span class="menu__count" v-if="this.completedTasks.length">
        {{ completedTasks.length }}
      </span>
    </router-link>
  </nav>

  <router-view></router-view>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  name: 'App',

  mounted() {
    if (localStorage.tasks !== '[]') {
      for (const item of JSON.parse(localStorage.getItem('tasks'))) {
        this.todoList.push({ value: item.value, id: item.id });
      }
    }
    if (localStorage.completedTodo !== '[]') {
      for (const item of JSON.parse(localStorage.getItem('completedTodo'))) {
        this.completedTasks.push({ value: item.value, id: item.id });
      }
    }
  },

  computed: {
    ...mapGetters('todo', ['todoList', 'todosItem', 'task', 'completedTasks']),
  },
  methods: {
    ...mapMutations('todo', ['addNewTodo', 'set', 'changeTodo']),
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: #999;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 900px;
  margin: 15vh auto;
  padding: 40px;
  background-color: #fafafa;
  box-shadow: 0 0 20px 0px #fff;
}
.close-form {
  width: 100%;
  margin-bottom: 5px;
}
.form-wrapper {
  margin-top: 15px;
}
.menu__item {
  position: relative;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  transition: color 0.4s;
  padding-right: 18px;
}
.menu__item:not(:last-child) {
  margin-right: 10px;
}
.menu__item:hover,
.menu__item.router-link-exact-active {
  color: #fc4c02;
}
.menu__count {
  position: absolute;
  background: #fc4c02;
  color: #fff;
  font-size: 11px;
  min-width: 15px;
  height: 15px;
  text-align: center;
  border-radius: 50%;
  font-weight: 600;
  top: 0;
  right: 0;
}
</style>
