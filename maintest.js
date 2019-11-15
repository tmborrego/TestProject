const tasks = [];

const addTask = (ev)=>{
    ev.preventDefault();
    const newTask = {
        title: document.getElementById('newTask').value,
        date:  document.getElementById('date').value,
    
    }

   tasks.push(newTask);
 

localStorage.setItem('MyNewTasks', JSON.stringify(tasks) );
};
const addRow = (ev)=>{
    ev.preventDefault();
    const newTask = document.getElementById('newTask').value;
    const date = document.getElementById('date').value;

    const table = document.getElementsByTagName('table')[0];
    
    const newRow = table.insertRow(table.rows.length/2+1);
        
    const cel1 = newRow.insertCell(0)
    const cel2 = newRow.insertCell(1);
            
        cel1.innerHTML = newTask;
        cel2.innerHTML = date;
     
};

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('subButton').addEventListener('click', addTask);
    document.getElementById('subButton').addEventListener('click', addRow);
    
})
  //next steps - get task and date value, store in an array
    //write display function to build table i can see
    //validate data
    //display data
    //create a separate event for deletion