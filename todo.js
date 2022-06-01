const list_container=document.getElementById('task-list');
const get_todo_elements=document.getElementById("get-todo-elements");

const todo_items =[];


function render() {
    // clearElement(list_container);
    todo_items.forEach((list)=>{
        clearElement(list_container);
        const list_element=document.createElement("li");
        const text=list.hasOwnProperty(text);
        console.log(text);
        const id =list.hasOwnProperty(id);
        list_element.className="list-name";
        list_element.innerHTML.appendChild(text,id)

        list_container.appendChild(list_element);   
    });

}

get_todo_elements.addEventListener("click",(e) =>{
    e.preventDefault();
    const input_field=document.getElementById("new-list");
    console.log(input_field)
    const text=input_field.value;
    console.log(text)
    addTodo(text)
    render()
    
});

function addTodo(text) {
    const todo = {
      text,
      checked: false,
      id: Date.now().toString(),
    };
   
  
    todo_items.push(todo);
    console.log(todo_items);
};

function clearElement(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}
  