const cloneAndAppendChild =(parentElement, elementCloned, time)=> {
    for (let i = 0; i < time; i++)
        parentElement.appendChild(elementCloned.cloneNode(true));
}

let width = 9;
let height = 9;
let tilemap = {};

const getTileElementAt =(x, y)=> document.getElementsByClassName("row")[y]?.getElementsByClassName("tile")[x];

//const calcTileAt =(x, y)=> 


const openTile =(x, y)=> {
    const tile = getTileElementAt(x, y);
    if (!tile || !tile.classList.contains("unopened")) return;
    tile.classList.add("opened");
    tile.classList.remove("unopened");
    let number = Math.floor(Math.random() * 8) + 1;
    if (number > 0) {
        tile.classList.add(`num${number}`);
        tile.innerHTML = number;
    }
    setTimeout(() => {
        openTile(x, y - 1);
        openTile(x, y + 1);
        openTile(x - 1, y);
        openTile(x + 1, y);
    }, 50)
}

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

[...document.getElementsByClassName("row")].forEach((row, y) => {
    [...row.getElementsByClassName("tile")].forEach((tile, x) => {
        tile.addEventListener("click", () => openTile(x, y));
    });
});