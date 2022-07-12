const addBtn = document.querySelector('#add');
const removeBtn = document.querySelector('#remove');
const sortBtn = document.querySelector('#sort');
const clearBtn = document.querySelector('#clear');
const list = document.querySelector('#list');

class ToDOList {
    constructor() {
        this.todo = []
    }
    render() {
        list.innerHTML = '';

        this.todo.forEach((item) => {
            let li = document.createElement('li');
            li.innerText = `${item.text}  id: ${item.id}`;
            list.appendChild(li);
        })
    }
    addToList() {
        let text = prompt('Enter your task');
        const obj = {
            text: text,
            date: Date.now(),
            id: Math.floor(Math.random() * 100)
        };
        this.todo.push(obj);
        this.render();
    }
    removeFromList() {
        let idArg = Number(prompt('Enter id for remove'));

        let index = this.todo.findIndex((item) => {
            return item.id === idArg
        })

        if (index !== -1) {
            this.todo.splice(index, 1)
        }
        this.render();
    }
    sort(date) {
        this.todo.sort((a, b) => {
            return b.date - a.date
        })
        this.render();
    }
    clear() {
        this.todo.splice(0, this.todo.length);
        this.render();
    }
}

const todo = new ToDOList();

addBtn.addEventListener('click', () => {
    todo.addToList();
})
removeBtn.addEventListener('click', () => {
    todo.removeFromList();
})
sortBtn.addEventListener('click', () => {
    todo.sort();
})
clearBtn.addEventListener('click', () => {
    todo.clear();
})