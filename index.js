// Selector Caching
const form = document.getElementById("form");
const formInput = document.getElementById("form-input");
const taskList = document.getElementById("task-list");

// Batch DOM updates using fragment
function add(text) {
    let fragment = document.createDocumentFragment();
    let li = document.createElement("li");
    li.textContent = text;
    li.className = 'task';
    li.innerHTML += "<button class='delete'>Delete</button>"
    fragment.appendChild(li);
    taskList.appendChild(fragment);
}

// Event Delegation
taskList.addEventListener("click", (e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }else if(e.target.classList.contains("task")){
        e.target.classList.toggle("completed");
    }
})

// Form submit handler
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    add(formInput.value);
    formInput.value = '';
})