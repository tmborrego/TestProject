const tasks = [];

const addTask = (ev)=>{
    ev.preventDefault();
    const newTask = {
        id: Date.now(),
        title: document.getElementById('newTask').value,
        date:  document.getElementById('date').value,
    
    }

    tasks.push(newTask);
    document.forms[0].reset();



localStorage.setItem('MyNewTasks', JSON.stringify(tasks) );

}

const addRow = (ev)=> {
    const id = Date.now();
    const newTask = document.getElementById('newTask').value;
    const date = document.getElementById('date').value; 

    const table = document.getElementsByTagName('table')[0];
    
    const newRow = table.insertRow(table.rows.length/2+1);
        
    const cel1 = newRow.insertCell(0)
    const cel2 = newRow.insertCell(1);
    const cel3 = newRow.insertCell(2);
        
        cel1.innerHTML = id;
        cel2.innerHTML = newTask;
        cel3.innerHTML = date;
}
document.addEventListener('DOMContentLoaded', ()=>{
    const subButton = document.getElementById ("subButton");
    subButton.addEventListener('click', addTask);
    subButton.addEventListener('click', addRow);
}
);
  //next steps - get task and date value, store in an array
    //write display function to build table i can see
    //validate data
    //display data
    //create a separate event for deletion