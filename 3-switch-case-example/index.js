var date = new Date();
var dateString = "";

switch (date.getDay()) {
    case 0:
        dateString = "Pazar";
        break;
    case 1:
        dateString = "Pazartesi";
        break;
    case 2:
        dateString = "Salı";
        break;
    case 3:
        dateString = "Çarşamba";
        break;
    case 4:
        dateString = "Perşembe";
        break;
    case 5:
        dateString = "Cuma";
        break;
    case 6:
        dateString = "Cumartesi";
        break;
    default:
        dateString = "Hata!";
        break;
}

var getMonthString = function (month) {
    switch (month) {
        case 0:
            return "Ocak";
        case 1:
            return "Şubat";
        case 2:
            return "Mart";
        case 3:
            return "Nisan";
        case 4:
            return "Mayıs";
        case 5:
            return "Haziran";
        case 6:
            return "Temmuz";
        case 7:
            return "Ağustos";
        case 8:
            return "Eylül";
        case 9:
            return "Ekim";
        case 10:
            return "Kasım";
        case 11:
            return "Aralık";
        default:
            return "Hata!";
    }
}

var isWeekend = function (day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Haftaiçi";
        case 6:
        case 0:
            return "Haftasonu";
    }
}

var fullDateString = date.getUTCDate(9) + " " + getMonthString(date.getMonth()) + " " + date.getFullYear() + " - " + dateString + " - " + isWeekend(date.getDay());

console.log(fullDateString);



var numberDirection = function (number) {
    switch (number) {
        case number < 0:
            return number + " sayısı negatif bir sayıdır.";
        case number > 0:
            return number + " sayısı pozitif bir sayıdır.";
        case number == 0:
            return number + " sayısı işaretsiz bir sayıdır.";
        default:
            return "Hatalı giriş yaptınız!";
    }
}

// Sonuç anlamadığım bir şekilde hatalı çıkıyor.
console.log(numberDirection(5)); // Hatalı giriş yaptınız!
console.log(numberDirection(0)); // Hatalı giriş yaptınız!
console.log(numberDirection(-10)); // Hatalı giriş yaptınız!