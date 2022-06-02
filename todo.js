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
    title_field.value=""
    description_field.value=""
    priority_field.value=""
    date_time_field.value=""

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
        
        moveToDone(row[rows])
        // table_element.deleteRow(row )
        
    })
}}  

console.log(row)

function moveToDone(item_to_move){
    let ul_done=document.getElementById("done-table")
    let li_done=document.createElement("li")
    let data = item_to_move.querySelectorAll("td")
    data.forEach((entry)=>{
        li_done.innerText+= `${entry.innerText}  `
    })
    li_done.style.textDecoration=="line-through"

    ul_done.appendChild(li_done)

}
let sort_btn=document.getElementById("sort-btn")
sort_btn.addEventListener("click",sortTable)

function sortTable() {
    let table, rows, switching, i, x, y, shouldSwitch, priority;
    table = document.getElementById("todo-table");
    rows=document.getElementsByTagName("tr")
    priority=document.getElementById("priority-field")
    switching = true;
    
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
        if (x.innerHTML=="high"){
            priority=3;
        }
        if (x.innerHTML=="neccessary"){
            priority=2;
        }
        if (x.innerHTML=="meh"){
            priority=1;
        }
        if (x.innerHTML > y.innerHTML) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
    //   }else{
    //     rows[i].parentNode.insertAfter(rows[i + 1], rows[i]);
    //     switching = true;
      }
    }
  }

function searchTodo(){

}
    




