let ul_done=document.getElementById("done-table");

// initialising the list with the adding of new to do elements 

document.getElementById("get-todo-elements").addEventListener("click",(e)=>{
   
    let title_field=document.getElementById("title-field");
    let description_field=document.getElementById("description-field");
    let priority_field=document.getElementById("priority-field");
    let date_time_field=document.getElementById("date-time-field");  
   
    // creating an object that holds theinput values from the user 

    let new_todo_elements ={
        title:title_field.value,            
        description:description_field.value,
        priority:priority_field.value,
        date_time:date_time_field.value,
    };
    let id=Date.now();

    // storing the items in local storage

    localStorage.setItem(id,JSON.stringify(new_todo_elements));
    title_field.value="";
    description_field.value="";
    priority_field.value="";
    date_time_field.value="";
    displayTable();


});

// creating the display table 

function displayTable(){
    let data=localStorage;
    let table_element = document.getElementById("todo-table");
    let html="";
    for (const value in data) {
        if (typeof data[value] === 'string') {
            info = JSON.parse(data[value]);
            html = html + "<tr><td>"+info.title+"</td><td>"+info.description+"</td><td>"+info.priority+"</td><td>"+info.date_time+"</td></tr>";
        };
    };
     table_element.innerHTML = html;
        
}

displayTable();

// creating rows in the display table 

let row =document.querySelectorAll("tr");
row.id=`${Date.now()}`;
console.log(row.id);
for (const rows in row){
    if (typeof row[rows] === 'object'){
        row[rows].addEventListener('click',()=>{
            moveToDone(row[rows]);
        })  ;
    };
};
console.log(row)

// checks if the items are checked and finished by the user

function alreadyDone(e){
    return e.classList.contains("striked");
}

// moves the items checked by user to the done element 
 
function moveToDone(item_to_move){
    if (alreadyDone(item_to_move)){
        return;
    };
    item_to_move.classList.add("striked") ;
    let ul_done=document.getElementById("done-table");
    let li_done=document.createElement("li");
    let data = item_to_move.querySelectorAll("td");
    data.forEach((entry)=>{
        li_done.innerText+= `${entry.innerText}  `;
    });
    li_done.style.textDecoration=="line-through";

    ul_done.appendChild(li_done);

}
// sorting function commence

let sort_btn=document.getElementById("sort-btn")
sort_btn.addEventListener("click",sortTable)

// sorts the tables  based on priority 

let priorities= new Map(Object.entries({
    high:3,
    neccessary:2,
    meh:1,
}))
function sortTable() {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("todo-table");
    rows=table.getElementsByTagName("tr")
    switching = true;
    
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
  
        if (priorities.get(x.innerHTML) > priorities.get(y.innerHTML)) {

          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        
        // rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        let temp=rows[i];
        rows[i]=rows[i+1];
        rows[i+1]=temp;
        switching = true;
        
      }
    }
    
    rows.forEach((row)=>{
        table.append(row);
    })

  }

//   search function based on title 
function searchTodo(){

}
