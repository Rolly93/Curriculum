const cancelButtons = document.querySelectorAll('.DeleteItem');
const completeButtons = document.querySelectorAll('.CompleteItem');
const addButton = document.querySelector('button[Add="addItem"]');
const todoList = document.querySelector('.todo-list');
const inputField = document.querySelector('input[type="text"]');

cancelButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const listItem = e.target.parentElement;
        todoList.removeChild(listItem);
    });
});

completeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const listItem = e.target.parentElement;
        listItem.classList.toggle('completed');
    });
});

addButton.addEventListener('click', () => {
    const taskText = inputField.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'DeleteItem';
        deleteButton.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            todoList.removeChild(item);
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'CompleteItem';
        completeButton.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            item.classList.toggle('completed');
        });

        listItem.appendChild(span);
        listItem.appendChild(deleteButton);
        listItem.appendChild(completeButton);
        todoList.appendChild(listItem);

        inputField.value = '';
    }
});
