const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must type something...!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    //'\u00d7' is the Unicode character for x symbol
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
// HTML tag names are case-insensitive in the HTML document,
// but when checking tag names in JavaScript, they are case-sensitive.
listContainer.addEventListener("click", function (e) {
  //toLowerCase used to change the conditions to use lowercase in tag names.
  if (e.target.tagName.toLowerCase() === "li") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName.toLowerCase() === "span") {
    e.target.parentElement.remove();
    saveData();
  } else {
    false;
  }
});
//save data
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
//show data
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
