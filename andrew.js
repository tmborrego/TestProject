



let tasks = [];

const addTask = (ev)=>{
    ev.preventDefault();
    const newTask = {
        title: document.getElementById('newtask').value,
        date:  Date.now()
    }
}
    tasks.push(newTask);
    document.forms[0].reset();

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('subButton').addEventListener('click', newTask);
})
const init = function(){
    document.getElementById('resButton').addEventListener('click', reset);
    document.getElementById('subButton').addEventListener('click', submit);
    }
    
    // listener to look for page loaded, then calls init, which loads the other listeners
 
    // add listeners to objects in the DOM and bind event functions
document.addEventListener('DOMContentLoaded', init); 
    
    // this is the code that runs when they press "reset"
const reset = function(ev){
    ev.preventDefault()
    console.log(document.getElementById('TaskID').value)
    }
    
    // this is the code that runs when they press submit
    // do not include function to store data in submit
const submit = function(ev){
    ev.preventDefault()
    console.log(document.getElementById('newTask').value)
    console.log(document.getElementById('date').value)
    }


    //next steps - get task and date value, store in an array
    //write display function to build table i can see
    //validate data
    //display data
    //create a separate event for deletion