// Clock

const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clock() {
  let now = new Date();

  hour.innerText = now.getHours() + "시";
  min.innerText = now.getMinutes() + "분";
  sec.innerText = now.getSeconds() + "초";
}
setInterval(clock, 1000);



//  Todo List 

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const form = document.querySelector('form');


todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const delItem = () => {
  event.target.parentElement.remove();
}


const addItem = () => {

  if(input.value !== '') {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    
    

    span.innerText = input.value;
    button.innerText = "삭제";
    button.addEventListener('click', delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);

  };
}

const handler = (event) => {
  event.preventDefault();

  const todo = {
    id : Date.now(),
    text : input.value
  };
  todos.push(todo);
  save();
  addItem(input.value);
  input.value = '';
};


const init = () => {
  const userText = localStorage.getItem('todos');
  if(userText) {
    userText.forEach
  }
}
form.addEventListener('submit', handler);