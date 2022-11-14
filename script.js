// var button =  document.getElementsByTagName("button")[0];

// button.addEventListener("mouseenter", function(){
//     console.log("Clicked!!");
// })
// button.addEventListener("click", function(){
//     console.log("Clicked!!");
// })
// button.addEventListener("mouseleave", function(){
//     console.log("Clicked!!");
// })



var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul")

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createTextNode("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value = "";
}

function addListafterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength > 0 && event.keycode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListafterClick)
input.addEventListener("keypress", addListAfterKeypress)