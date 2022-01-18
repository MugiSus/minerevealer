const cloneAndAppendChild =(parentElement, elementCloned, time)=> {
    for (let i = 0; i < time; i++)
        parentElement.appendChild(elementCloned.cloneNode(true));
}

const getTileAt =(x, y)=> 
    document.getElementsByClassName("row")[y].getElementsByClassName("tile")[x]

cloneAndAppendChild(
    document.getElementsByClassName("row")[0],
    document.getElementsByClassName("tile")[0],
    width - 1
);
cloneAndAppendChild(
    document.getElementById("container"),
    document.getElementsByClassName("row")[0],
    height - 1
);

[...document.getElementsByClassName("tile")].forEach(tile => 
    tile.addEventListener("click", () => {
        tile.classList.remove("unopened");
        let number = Math.floor(Math.random() * 9);
        if (number > 0) {
            tile.classList.add(`num${number}`);
            tile.innerHTML = number;
        }
    })
)

let width = 8;
let height = 8;

const openTile =(targetTile, x, y)=> {
    
}
