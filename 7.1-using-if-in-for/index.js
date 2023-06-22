
// Çalıştıramadım

const map = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
]

const MAP_AREA = document.getElementById("map_area");
MAP_AREA.style.width = map[0].length * 50 + "px";

var emptyArea = "<div style = 'outline: 1px solid silver; width: 50px; height: 50px; background-color: white'></div>";
var fullArea = "<div style = 'outline: 1px solid silver; width: 50px; height: 50px; background-color: green'>🐑</div>";

var x = map.length;
var y = map[0].length;
var total = (y * x) - 1;

var indexX = 0;
var indexY = 0;

for (let i = 0; i <= total; i++, indexX++) {

    if (indexX > x + 1) {
        indexX = 0;
        indexY++;
    }

    console.log(i, indexY, indexX);

    if (map[indexY][indexX] === 1) {
        MAP_AREA.innerHTML += fullArea;
    } else {
        MAP_AREA.innerHTML += emptyArea;
    }
}