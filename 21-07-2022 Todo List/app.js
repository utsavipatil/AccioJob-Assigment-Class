// console.log('Todo List');
const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

const todoString = JSON.parse(localStorage.getItem('todoString'));

const updateLS = () => {
    const allTodos = document.querySelectorAll('li');
    const todoArr = [];
    allTodos.forEach(e =>{
        todoArr.push({
            text : e.innerText,
            isCompleted : e.classList.contains('completed')
        });
    });

    localStorage.setItem('todoString' , JSON.stringify(todoArr));
}

const addTodo = (todo) => {
    let todoText = input.value;

    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const todoEle = document.createElement('li');

        if(todo && todo.isCompleted){
            todoEle.classList.add('completed');
        }

        todoEle.innerText = todoText;

        todoEle.addEventListener('click', () =>{ //Left / Normal click for completed
            todoEle.classList.toggle('completed');
            updateLS();
        });

        todoEle.addEventListener('contextmenu', (e) => { //Right click to remove list item
            e.preventDefault();
            todoEle.remove();
            updateLS();
        });

        todos.appendChild(todoEle); 
        input.value = "";  
        
        updateLS();
    }
    // console.log(todoText);
};


if(todoString){
    todoString.forEach(element => {
        addTodo(element);
    });
}

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    addTodo();
})

