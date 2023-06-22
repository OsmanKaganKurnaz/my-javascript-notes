// const name = () => {} : arrow function


function getTime1 () {
    let date = new Date();
    document.body.innerHTML = date.toLocaleTimeString();
}

getTime1();



const getTime2 = function(date,text,type) {

    let currentDate = date || new Date();
    let currentText = text || "Merhaba. Şu an: ";
    let message = "";

    if(type === 1) {

        message = currentText + currentDate.toLocaleTimeString();
    } else {
        message = currentText + currentDate.toLocaleDateString();
    }


    document.body.innerHTML += "<div>" + message + "</div>";
}

getTime2(new Date(), "Tarih: ", 0);
getTime2(new Date(), null, 1);
getTime2(new Date(), "Şimdi: ", 1);
getTime2();



const getTime3 = function( date = new Date(), text = "Merhaba. Şu an: ", type = 1) {

    document.body.innerHTML += "<div>" + text + (type===1 ? date.toLocaleTimeString() : date.toLocaleDateString()) + "</div>";
}

getTime3(new Date(), "Tarih: ", 0);
getTime3(new Date(), "", 1);

var date = new Date();
getTime3(date, "Şimdi: ", 1);

getTime3();



const getTime4 = function(date = new Date(), text = "Merhaba. Şu an: ", type = 1) {

    return "<div>" + text + (type === 1 ? date.toLocaleTimeString() : date.toLocaleDateString() + "</div>");
}

console.log(getTime4(new Date(), "Tarih: ", 0)); // console çıktısı

document.body.innerHTML += getTime4(new Date(), "Tarih: ", 0);
document.body.innerHTML += getTime4(new Date(), "", 1);
document.body.innerHTML += getTime4();