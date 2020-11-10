/*
    RhymeSearch Module.
    RhymeSearch Version 1.0.0
    Made by Isfar Tausif Rhyme.
*/

class RhymeSearch {
    SearchableItems = []

    getChars(inputString) {
        var inputString = inputString.toLowerCase()
        var returnValue = []
        for (let char in inputString) {
            if (inputString[char] != " ") {
                returnValue.push(inputString[char])
            }
        }
        return returnValue
    }

    getWords(inputString) {
        var inputString = inputString.toLowerCase()
        var removeChar = [".", ",", "!", "?", "-", ":", ";"]
        for (let char in removeChar) {
            if (inputString.includes(removeChar[char])) {
                inputString = inputString.replace(removeChar[char], "")
            }
        }
        return inputString.split(" ")
    }

    search(keyWord) {
        // Getting Chars
        var inputChars = this.getChars(keyWord)
        var allStringsChar = {}
        for (let word in this.SearchableItems) {
            allStringsChar[this.SearchableItems[word]] = this.getChars(this.SearchableItems[word])
        }

        // Getting Words
        var inputWords = this.getWords(keyWord)
        var allStringsWord = {}
        for (let word in this.SearchableItems) {
            allStringsWord[this.SearchableItems[word]] = this.getWords(this.SearchableItems[word])
        }

        // Repution Obj Init
        var wordRepution = {}
        for (let word in this.SearchableItems) {
            wordRepution[this.SearchableItems[word]] = 0
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

    sortedSearch(keyWord){
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
}