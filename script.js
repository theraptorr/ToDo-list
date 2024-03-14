let input = document.getElementById("taskInput");
let btn = document.querySelector(".add");
let ul = document.getElementById("tasklist");

btn.addEventListener("click",addTask);

function addTask(){
   let taskText = input.value.trim();
   if(taskText !== ""){
   let li = document.createElement("li");
   li.textContent = taskText;

   let deletButton = document.createElement("button")

   deletButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
   deletButton.className = "delete";
   deletButton.onclick = function (){
    li.remove()
   }
   li.appendChild(deletButton);
   ul.appendChild(li);
   input.value = " ";

  
}
}

