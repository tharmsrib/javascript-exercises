const getTheTitles = function(arrayObj) {
    // Your job is to write a function that takes the array and returns an array of titles:
    const bookNames = arrayObj.map(book => {
        // console.log(book.title);
        return book.title;
    });
    // console.log(bookNames);
    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
