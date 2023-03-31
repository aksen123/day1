const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/*
1.삭제버튼 추가
2.데이터 저장
3.삭제버튼 클릭시 저장된 데이터 업데이트
*/

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}


const delItem = (event) => {
  // console.log("삭제!");
  // console.log(event.target.parentElement);
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
};


const addItme = (todo) => {
  if(todo.text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    span.innerText = todo.text;
    button.innerText ='삭제';
    button.addEventListener('click', delItem)

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  };
};

const handler = (event) => {
  event.preventDefault();

  const todo = {
    id: Date.now(),
    text : input.value
  };

  todos.push(todo);
  addItme(todo);
  save();
  input.value = '';
};

const init = () => {
  // const userTodos = localStorage.getItem('todos');
  // console.log(userTodos);
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  if(userTodos) {
  userTodos.forEach((todo) => addItme(todo))
  }
}
init();
form.addEventListener('submit', handler);


// localStorage.setItem('Hello', 'world'); //Hello 라는 키값으로 world 아이템을 저장
// const myDate = localStorage.getItem('Hello'); //키값으로 아이템 호출