function inputName() {
    let name = prompt("Input Your Name");// input
    let greeting = "Welcome "+name;
    document.getElementById("name").innerHTML = greeting; // output

    document.write("Doc Write " + greeting);
    window.alert("Window Alert " + greeting);
    console.log("Console Log " + greeting);
    
}

inputName(); // call the function