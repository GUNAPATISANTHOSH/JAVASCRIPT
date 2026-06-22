function addTask() {

    let task = document.getElementById("task").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let p = document.createElement("p");

    p.innerText = task;

    document.getElementById("list").appendChild(p);

    document.getElementById("task").value = "";
}   
