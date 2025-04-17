const cont = document.querySelector(".container");
for(let i =0; i<256;i++){
    const div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute("style", "width:" + (cont.clientWidth/16) + "px; height:" + (cont.clientWidth/16) + "px;");
    cont.appendChild(div);
}