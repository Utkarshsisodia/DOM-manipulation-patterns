// Selector Caching
const form = document.getElementById("form");
const input = document.getElementById("form-input");
const list = document.getElementById('task-list');

// Batch DOM updates using fragment
function addTask(text){
    let fragment = document.createDocumentFragment();
    let li = document.createElement("li");
    li.textContent = text;
    li.className = "task";
    li.innerHTML += "<button class='delete'>delete</button>";
    fragment.appendChild(li);
    list.appendChild(fragment);
}

// Event Delegation
list.addEventListener("click", (e)=>{
    if(e.target.classList.contains("task")){
        e.target.classList.toggle("completed");
    }else if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
})

// Form submit handler
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    addTask(input.value);
    input.value = '';
})