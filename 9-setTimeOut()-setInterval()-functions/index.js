/* 

setTimeOut(function() {
    kod bloğu...
}, time);

*/

function showTimeFinishedMessage(text = "Süre Bitti!"){

    document.body.innerHTML = "<div>" + text + "</div>";
}


function askQuestion(text = "") {
    
    document.body.innerHTML = "<div>" + "Soru: " + text + "</div>";

    // 15 saniye = 15000 milisaniye
    let time = 5 * 1000;
    let countNumber = 5;

    var counter = setInterval(function(){

        countNumber -= 1;
        console.log(countNumber);

        if(countNumber === 0){
            showTimeFinishedMessage();
            clearInterval(counter);
        }
    },time/5);
    
    /*
    
    setTimeout(function() {
        showTimeFinishedMessage();
    }, time);

    */

   
}



askQuestion("En sevdiğiniz programlama dili nedir?");