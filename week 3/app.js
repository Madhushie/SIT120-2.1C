const app = Vue.createApp({
    data() {
      return {
        newTodo: '',
        todos: [],
       // numbers: [1, 2, 3, 4, 5]  // Define the numbers array here

      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim() !== '') {
          this.todos.push({ text: this.newTodo, completed: false });
          this.newTodo = '';
        }
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      }
    }
  });
  
  app.mount('#app');
  