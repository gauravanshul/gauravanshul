/**
 * Immutablity:Array
 * 
 */
//Add
let list = [1, 2, 3];
Object.freeze(list);
//print list - Before Add
console.log(list);
//Add new item-push
//list.push(4); - mutable api

//immutable api - concat returns new Array after add
console.log(list.concat([4]));
//Short cut to concat:
//concat is es 5 array api
//ES6 and ES 7 provides short cut for concat.
let newArray = [...list, 5];
console.log(newArray);
////////////////////////////////////////////////////////////////


//Mutable version of Changing data
/* const toggleTodo = todo => {
  // Mutated version:
  todo.completed = !todo.completed
  todo.text = 'I have learned Redux';
  return todo;
} */
//Immutable Version
const toggleTodo = (todo) => {
    //ES 6 Api
    /**
     * Object.assign(newObject,oldObject,dataTobemodifed);
     */
    /* return Object.assign({}, todo, {
    text:'I have learned Redux',
    completed: !todo.completed
    });

    */
    /**
     * Using ES 7 Spread Operator
     */
    return {
        ...todo,
        completed: !todo.completed,
        text: 'Learn react with Redux'
    };
};
let data = {
    id: 0,
    text: 'Learn Redux', //original
    completed: true //false
};
Object.freeze(data);
console.log(toggleTodo(data));