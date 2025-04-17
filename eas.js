const color = ["#00ff00", "#ff0000", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];

const cont = document.querySelector(".container");
for(let i =0; i<256;i++){
    let div = document.createElement("div");
    div.classList.add("box");
    div.setAttribute("style", "width:" + (cont.clientWidth/16) + "px; height:" + (cont.clientWidth/16) + "px;");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
    });
    cont.appendChild(div);
}

let nbox = document.querySelector(".btn");
nbox.addEventListener("click", () => {
    let nsquare = "";
    do {
        nsquare = prompt("Enter the number of squares per side");
    } while (nsquare >100);
    cont.innerHTML = "";
    for (let i =0; i<nsquare*nsquare;i++){
        let div = document.createElement("div");
        div.setAttribute("style", "width:" + (cont.clientWidth/nsquare) + "px; height:" + (cont.clientWidth/nsquare) + "px;");
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
        });
        cont.appendChild(div);

    }
}
);