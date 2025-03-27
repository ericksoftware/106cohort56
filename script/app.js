
// function sayHello(){
//     console.log("Hello sayhello");
// }

// let toy="hello";

// function init(){
//     console.log("Hello in the init");
// }

function saveTask(){
    console.log("saveTask is running");
}

function init(){
    console.log("The init it's running");

    $("#btnSave").click(saveTask)
}


window.onload = init;