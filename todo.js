const list_container=document.getElementById('task-list');
const get_todo_elements=document.getElementById("get-todo-elements");
let input_field=document.getElementById("input-field");

const todo_items =[];

get_todo_elements.addEventListener("click",(e) =>{
    e.preventDefault();
    let text_input=inputfield.textContent;
    todo_items.push(text_input);
    console.log(todo_items)
    debugger
    addTodo()
    render()
    
});




function addTodo(text) {
    const todo = {
      text,
      id: Date.now().toString(),
    };
   
  
    todo_items.push(todo);
    return todo
};

function clearElement(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}
  
function render() {
    // clearElement(list_container);
    todo_items.forEach((list)=>{
        clearElement(list_container);
        const list_element=document.createElement("li");        
        list_element.className="list-name";
        list_element.appendChild(list.value);

    });
};