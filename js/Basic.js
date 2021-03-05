var newItemCounter = 1;
var ourList = document.getElementById ("our-list")
var ourButton = document.getElementById ("button");
var ourHeadLine = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");



ourList.addEventListener("click", activateItem);

function activateItem (e) {  
 if (e.target.NodeName == "li"){
    ourHeadLine.innerHTML = e.target.innerHTML;
    for (i=0; i < e.target.parentNode.children.length; i++){    //listtems.lenght para contar la cantidad de items que hay en la lista
        e.target.parentNode.children[i].classList.remove("active"); //metodo + primer argumento nmombre de argumento 2do evento "que quiero que pase"
    }
    e.target.classList.add("active");
 }
} 





ourButton.addEventListener ("click", createNewItem);

function createNewItem () {
ourList.innerHTML += "<li>item numero " + newItemCounter + "</li>";
newItemCounter++;
//this.classList.add("button");
}




//for (i=0; i < listItems.length; i++){    //listtems.lenght para contar la cantidad de items que hay en la lista
 ////   listItems [i].innerHTML = "hola"
//}
