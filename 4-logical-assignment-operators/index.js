const books = [
    {
        name: "Javascript",
        isbn: "111111",
        price: "20$",
    },
    {
        name: "React",
        isbn: "222222",
        price: "10$",
    },
    {
        name: "PHP",
        isbn: "333333",
        price: "",
    },
];

var priceQuery = function (book) {
    if (book === "") {
        return(" price değeri yok.");
    } else {
        return(" price değeri var");
    }
}

for (const book of books) {
    console.log("1 " + book.name + " " + priceQuery(book.price));
    book.price &&= "";
}

for (const book of books) {
    console.log("2 " + book.name + " " + priceQuery(book.price));
}
