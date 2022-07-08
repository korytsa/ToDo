class ToDOList{
    constructor(){
        this.todo = []
    }
    addToList(text){
        const obj = {text: text, date: Date.now(), id: Math.floor(Math.random() * 100)};
        this.todo.push(obj);
    }
    removeFromList(idArg){
        let index = this.todo.findIndex((item) => {
            return item.id === idArg.id
        })
        if (index !== -1){
            this.todo.splice(index, 1)
        }
    }
    sort(date){
        this.todo.sort((a, b) => {
            return a.date - b.date
        })
    }
    clear(){
        this.todo.splice(0, this.todo.length);
    }
}

const todo = new ToDOList();
todo.addToList("Go to the Gym"); 
todo.addToList("Call with Mascha"); 
todo.removeFromList({id: 5}) 
todo.sort(); 
// todo.clear(); 
console.log(todo)