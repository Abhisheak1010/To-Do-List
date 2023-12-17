const searchbar = document.getElementById("search-bar");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if (searchbar.value==='')
    {
        alert("Please write something first!!!")
    }

    else
    {
         let li = document.createElement("li");
         li.innerHTML = searchbar.value;
         listcontainer.appendChild(li);
         let span = document.createElement("span");
         span.innerHTML = "\u00d7";
         li.appendChild(span);

    }
    searchbar.value = "";
    savedata();

}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showlist(){
    listcontainer.innerHTML = localStorage.getItem("data");

}

showlist();


