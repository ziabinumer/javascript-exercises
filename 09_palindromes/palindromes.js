const palindromes = function (word) {
    word = word.toLowerCase().replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '');
    reverseWord = word.split("").reverse().join("");
    if (word == reverseWord) return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
