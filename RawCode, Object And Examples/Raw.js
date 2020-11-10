/*
    RhymeSearch Module.
    RhymeSearch Version 1.0.0
    Made by Isfar Tausif Rhyme.
*/

var SearchableItems = ["WOW", "This", "Really Does Work", "Wow This Really Does Work"]

function getChars(inputString) {
    var inputString = inputString.toLowerCase()
    var returnValue = []
    for (let char in inputString) {
        if (inputString[char] != " ") {
            returnValue.push(inputString[char])
        }
    }
    return returnValue
}

function getWords(inputString) {
    var inputString = inputString.toLowerCase()
    var removeChar = [".", ",", "!", "?", "-", ":", ";"]
    for (let char in removeChar) {
        if (inputString.includes(removeChar[char])) {
            inputString = inputString.replace(removeChar[char], "")
        }
    }
    return inputString.split(" ")
}

function search(keyWord) {
    // Getting Chars
    var inputChars = getChars(keyWord)
    var allStringsChar = {}
    for (let word in SearchableItems) {
        allStringsChar[SearchableItems[word]] = getChars(SearchableItems[word])
    }

    // Getting Words
    var inputWords = getWords(keyWord)
    var allStringsWord = {}
    for (let word in SearchableItems) {
        allStringsWord[SearchableItems[word]] = getWords(SearchableItems[word])
    }

    // Repution Obj Init
    var wordRepution = {}
    for (let word in SearchableItems) {
        wordRepution[SearchableItems[word]] = 0
    }

    // Repution Per Word Match
    for (let inputWord in inputWords) {
        for (let word in allStringsWord) {
            if (allStringsWord[word].includes(inputWords[inputWord])) {
                wordRepution[word] = wordRepution[word] + 2
            }
        }
    }

    // Repution Per Char Match
    for (let char in inputChars) {
        for (let word in allStringsChar) {
            if (allStringsChar[word].includes(inputChars[char])) {
                wordRepution[word] = wordRepution[word] + 1
            }
        }
    }

    return wordRepution
}

function sortedSearch(keyWord){
    var result = this.search(keyWord)
    var returnValue = {};
    
    for(let item in result){
        if (returnValue[result[item]]==undefined){
            returnValue[result[item]]=item
        }else{
            returnValue[result[item]+1]=item
        }
    }
    
    var orderedReturnValue = [];
    for (let item in returnValue){
        orderedReturnValue.unshift(returnValue[item])
    }

    return orderedReturnValue;
}

console.log(search("Wow! This Really Does Work."))