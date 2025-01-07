let input = document.querySelector("#inputbox");
let listcontainer = document.querySelector("#list-container")

function addtask(){
    if(input.value === "") {
        alert("please enter some vlue")

    }else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listcontainer.appendChild(li);
        let crosssign = document.createElement("crosssign");
        crosssign.innerHTML = "\u00d7";
        li.appendChild(crosssign);
        // crosssign.style.fontSize = "2rem"
    }
    input.value = "";
}

listcontainer.addEventListener("click", (e)=>{

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName === "CROSSSIGN"){
        e.target.parentElement.remove();

    }
}, false)