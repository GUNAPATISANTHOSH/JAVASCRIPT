function checkResult() {

    let name = document.getElementById("name").value;

    let marks = document.getElementById("marks").value;

    let output = document.getElementById("output");

    if (marks >= 35) {

        output.innerText =
        name + "  scored " + marks + " marks and PASSED";

        output.style.color = "green";
    }

    else {

        output.innerText =
        name + " scored " + marks + " marks and FAILED";

        output.style.color = "red";
    }
}
function addTask() {

    let task = document.getElementById("task").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let div = document.createElement("div");

    let p = document.createElement("p");

    p.innerText = task;

    let btn = document.createElement("button");

    btn.innerText = "Delete";

    btn.onclick = function () {
        div.remove();
    };

    div.appendChild(p);

    div.appendChild(btn);

    document.getElementById("list").appendChild(div);

    document.getElementById("task").value = "";
}