let ul_done=document.getElementById("done-table")

document.getElementById("get-todo-elements").addEventListener("click",(e)=>{
   
    let title_field=document.getElementById("title-field")
    let description_field=document.getElementById("description-field")
    let priority_field=document.getElementById("priority-field")
    let date_time_field=document.getElementById("date-time-field")  
    let new_todo_elements ={
        title:title_field.value,
        description:description_field.value,
        priority:priority_field.value,
        date_time:date_time_field.value,
    }
    let id=Date.now();
    localStorage.setItem(id,JSON.stringify(new_todo_elements))
})

function displayTable(){
    let data=localStorage
    let table_element = document.getElementById("todo-table")
    let html=""
    for (const value in data) {
        if (typeof data[value] === 'string') {
            info = JSON.parse(data[value])
            html = html + "<tr><td>"+info.title+"</td><td>"+info.description+"</td><td>"+info.priority+"</td><td>"+info.date_time+"</td></tr>"
        }
    }
    table_element.innerHTML = html
        
    }
displayTable();
let row =document.querySelectorAll("tr")
row.id=`${Date.now()}`
console.log(row.id)
for (const rows in row){
    if (typeof row[rows] === 'object'){
    row[rows].addEventListener('click',()=>{

       
        row[rows].style.textDecoration ="line-through"
        
        moveToDone(row)
        // table_element.deleteRow(row )
        
    })
}}  

console.log(row)
function moveToDone(e){
    console.log(e)
    let li_done=document.createElement("li")
    let string_e= e.toString(JSON.stringify())
   
    li_done.innerText=`${string_e}`
    li_done.style.textDecoration=="line-through"

    ul_done.appendChild(li_done)

}


    




