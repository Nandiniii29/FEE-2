const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");

const search=document.getElementById("search");
const filter=document.getElementById("filter");

let tasks=[];

taskInput.focus();

function render(){

taskList.innerHTML="";

let arr=[...tasks];

arr.forEach(task=>{

if(!task.text.toLowerCase().includes(search.value.toLowerCase()))
return;

if(filter.value==="active" && task.done)
return;

if(filter.value==="completed" && !task.done)
return;

const div=document.createElement("div");

div.className="task";

div.innerHTML=`

<div class="left">

<input type="checkbox" ${task.done?"checked":""}>

<input
type="text"
value="${task.text}"
${task.done?"class='completed'":""}
disabled>

</div>

<div class="actions">

<button class="edit">Edit</button>

<button class="save">Save</button>

<button class="done">${task.done?"Undo":"Done"}</button>

<button class="delete">Delete</button>

</div>

`;

const check=div.querySelector("input[type=checkbox]");

const text=div.querySelector("input[type=text]");

const edit=div.querySelector(".edit");

const save=div.querySelector(".save");

const done=div.querySelector(".done");

const del=div.querySelector(".delete");

check.onclick=()=>{

task.done=!task.done;

render();

};

done.onclick=()=>{

task.done=!task.done;

render();

};

edit.onclick=()=>{

text.disabled=false;

text.focus();

edit.style.display="none";

save.style.display="inline-block";

};

save.onclick=()=>{

if(text.value.trim()!="")
task.text=text.value.trim();

render();

};

del.onclick=()=>{

tasks.splice(tasks.indexOf(task),1);

render();

};

taskList.appendChild(div);

});

updateStats();

}

function updateStats(){

const total=tasks.length;

const completed=tasks.filter(task=>task.done).length;

document.getElementById("total").textContent=total;

document.getElementById("completed").textContent=completed;

const percent=total?completed/total*100:0;

document.getElementById("progressBar").style.width=percent+"%";

}

addBtn.onclick=()=>{

const value=taskInput.value.trim();

if(value==="") return;

tasks.push({

text:value,

done:false

});

taskInput.value="";

taskInput.focus();

render();

};

taskInput.addEventListener("keypress",function(e){

if(e.key==="Enter")

addBtn.click();

});

search.oninput=render;

filter.onchange=render;

document.getElementById("clearBtn").onclick=function(){

tasks=tasks.filter(task=>!task.done);

render();

};

render();