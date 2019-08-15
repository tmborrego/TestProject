
document.addEventListener('DOMContentLoaded', init);


function init(){
    let buttonSubmit  =document.getElementById('buttonsubmit');
    let newTask       =document.getElementById('newtask')   


    buttonSubmit.addEventListener('click', submitTask);
    function submitTask (ev){
      console.log('submit');
    }
    newTask.addEventListener('change',typeTask);
      function typeTask (ev){
      var task = newTask.value;
      document.write (task);
    newTask.addEventListener('mouseleave',typeTask)
      function typeTask (ev){
      var task = newTask.value;
      document.write (task);
    }
   }

    }

  

  
    
//disable default behavior so that it does not write to a separate page
//interrupt, capture, and print
//interrupt - prevent default ev.preventDefault



/*
DOCUMENT (web page) OBJECT (all the stuff on the page) MODEL (breaks down how everything is related
want to take DOM form object and encode as JSON and write to file
also want to read from file and write to DOM



// function to extract DOM from object

// function to encode form data to JSON

// function to write json to file (tasks.json)

// function to read tasks.json and return data-structure

// fuction to write to DOM
*/