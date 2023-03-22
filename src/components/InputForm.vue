<template>
  <form novalidate @submit.prevent.stop="sumbitValue" class="add-from">
    <input type="text" v-model="task.value" class="add-from__input" />
    <button type="submit" class="btn add-from__submit" @mousedown.prevent.stop>
      <slot></slot>
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      task: {
        type: Object,
      },
    };
  },
  props: ['value'],
  created() {
    this.task.value = this.value;
  },
  methods: {
    sumbitValue() {
      if (this.task.value) {
        this.task.id = Date.now();
        this.$emit('submit-value', this.task);
        this.task = { value: '' };
      }
    },
  },
};
</script>

<style>
.add-from {
  display: flex;
}
.add-from__input {
  /*  flex-grow: 5; */
  flex-basis: 80%;
}
.add-from__submit {
  /* flex-grow: 1; */
  flex-basis: 20%;
}
.btn {
  background: initial;
  border: 1px solid;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 0;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.4s, border 0.4s, color 0.4s;
}
.btn:hover {
  background: #fc4c02;
  border: 1px solid #fc4c02;
  color: #fff;
}
.btn_warning {
  background: #fc4c02;
  border: 1px solid #fc4c02;
  color: #fff;
}
.btn_warning:hover {
  background: initial;
  border: 1px solid #000;
  color: #000;
}
</style>
