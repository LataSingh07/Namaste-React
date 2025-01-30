function pattern(noofrows) {
    for (var i = 0; i < noofrows; i++) {
        let row = "";
        for (var k = 0; k < noofrows - i - 1; k++) {
            row += " ";
        }
        for (var j = 0; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}

pattern(5);
