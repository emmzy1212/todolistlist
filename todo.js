document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.querySelector('.todo-form');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('td');
  
    todoForm.addEventListener('submit', addTodo);
    todoList.addEventListener('click', deleteTodo);
  
    function addTodo(event) {
      event.preventDefault();
      const todoText = todoInput.value.trim();
      if (todoText === '') return;
  
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      todoItem.innerHTML = `
        <span>${todoText}</span>
        <button class="delete-btn">Delete</button>
      `;
      todoList.appendChild(todoItem);
      todoInput.value = '';
    }
  
    function deleteTodo(event) {
      if (event.target.classList.contains('delete-btn')) {
        const todoItem = event.target.closest('.todo-item');
        todoItem.remove();
      }
    }
  });