const CARS_DIV = document.getElementById("cars");

var carList = [
    "Renault",
    "Mercedes",
    "Volvo",
    "BMW"
]

for (let i = 0; i < carList.length; i++) {
    CARS_DIV.innerHTML += "<p>" + Number(i+1) + ". araba modeli: " + carList[i] + ".</p>";
}

