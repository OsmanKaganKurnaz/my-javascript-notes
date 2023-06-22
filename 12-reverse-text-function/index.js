
const reverseText = function(text) {
    
    if (text === "") return "";

    return reverseText(text.substr(1)) + text[0];
}

var text1 = "Osmanbey";

console.log(reverseText("Osman bey diyeceksiniz"));