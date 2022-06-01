document.getElementById("get-todo-elements").addEventListener("click",(e)=>{
    let title_field=document.getElementById("title-field")
    let description_field=document.getElementById("description-field")
    let priority_field=document.getElementById("priority-field")
    let date_time_field=document.getElementById("date-time-field")
    console.log(title_field.value,description_field.value,priority_field.value,date_time_field.value)
})