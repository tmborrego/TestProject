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


//console.warn('You did it!' , {tasks} );
//const pre = document.querySelector('#msg pre');
//pre.textContent = '\n' + JSON.stringify(tasks, '\t',2);

localStorage.setItem('MyNewTasks', JSON.stringify(tasks) );

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('subButton').addEventListener('click', addTask);
}
);

function addRow () {
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
  //next steps - get task and date value, store in an array
    //write display function to build table i can see
    //validate data
    //display data
    //create a separate event for deletion