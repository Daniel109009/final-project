console.log("Testing");

function changeColor(squareId){
    var square = document.getElementById(squareId);
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function flashColors() {
    var flashes = document.querySelectorAll(".flash");
    flashes.forEach(flashFunction);
}

function flashFunction(item){
    var randomColor = getRandomColor();
    item.setAttribute("style", "color:" + randomColor);
}
let timer = setInterval(flashColors, 100);

function show() {
    document.getElementById('image')
        .style.display = "block";
    document.getElementById('btnID')
        .style.display = "none";
}