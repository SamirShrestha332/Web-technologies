const list_contain = document.querySelector('.list-group');
const input = document.querySelector('.list_name');
const btn = document.querySelector('#add-Btn');

btn.addEventListener('click', addTask);

list_contain.addEventListener('click', (e) => {
    if (e.target.classList.contains('crossicon')) {
        e.target.closest('li').remove();
        storeTasks();
    } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('workdone');
        storeTasks();
    }
});

function addTask() {
    const taskText = input.value.trim();
    if (taskText === '') {
        window.alert('Input must not be empty');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<ion-icon name="pencil-outline" class='icon'></ion-icon>`+ taskText;
    
    const span = document.createElement('span');
    span.innerHTML = '<img src="cross.svg" alt="" width="15px" class="crossicon">';
    
    li.appendChild(span);
    list_contain.appendChild(li);
    
    input.value = '';
    storeTasks();
}

function storeTasks() {
    localStorage.setItem('tasks', list_contain.innerHTML);
}

function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        list_contain.innerHTML = savedTasks;
    }
}

loadTasks();
