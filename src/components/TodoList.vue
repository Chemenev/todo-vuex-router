<template>
  <div>
    <ul class="todo-list">
      <li
        class="todo-list__item todo-item"
        v-for="(todo, index) in todos"
        :key="todo.id"
      >
        <input
          class="todo-item__checkbox"
          type="checkbox"
          :id="'id' + todo.id"
          :checked="isChecked"
          @change="copyItem(todo, index)"
        />
        <div
          class="todo-item__value"
          title="Click to change"
          @click="editTask(index, todo)"
        >
          {{ todo.value }}
        </div>
        <div class="todo-item__actions">
          <button class="btn btn_warning" @click="deleteItem(index)">x</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    todos: {
      type: Array,
    },
    isChecked: {
      type: Boolean,
    },
  },
  methods: {
    editTask(index, value) {
      this.$emit('edit-val', { index, value });
    },
    copyItem(todo, index) {
      this.$emit('copy-todo', todo, index);
    },
    deleteItem(index) {
      this.$emit('delete-todo', index);
    },
  },
};
</script>
<style>
.todo-list {
  margin: 0;
  padding: 0;
}
.todo-list__item {
  list-style: none;
}
.todo-item {
  display: grid;
  align-items: center;
  gap: 15px;
  grid-template: 1fr/40px 1fr 40px;
}
.todo-item:not(:last-child) {
  margin-bottom: 10px;
}
.todo-item__value {
  cursor: pointer;
}
.todo-item__actions {
  display: flex;
  justify-content: flex-end;
}
</style>
