var form= document.getElementById("todoForm");
form.addEventListener("submit", function(e){
    e.preventDefault();

    var li= document.createElement("li");
    var task= document.getElementById("task");
    li.innerText= task.value + " " +  " ";
    var button= document.createElement("button");
    button.innerHTML="remove";
    button.style.marginLeft="380px";
    var list= document.getElementById("list");
    list.appendChild(li);

    //  Local Storage starts
    localStorage.setItem("prevTask", li);
    list.appendChild(localStorage.getItem("prevTask"));
    // Local Storage ends

    li.appendChild(button);
    li.innerHTML+="<br><hr>";
    li.style.paddingTop="5px";
    list.style.maxWidth="500px";

})

list.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase()=="li"){
        event.target.style.textDecoration="line-through";
    }
    else if (event.target.tagName.toLowerCase()== "button") {
        event.target.parentNode.remove();
    }
})

