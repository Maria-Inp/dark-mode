let input = document.querySelector("#checkBox");
let title = document.querySelectorAll(".title");

input.onclick = function() {
    if (input.checked == true) {
        document.body.style.backgroundColor = "#343434";
        title.forEach(t => t.style.color = "#fff");
    } else {
        document.body.style.backgroundColor = "#fff";
        title.forEach(t => t.style.color = "#343434");
    }
}