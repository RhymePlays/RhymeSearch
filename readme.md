# RhymeSearch

**Version 1.0.0**

RhymeSearch A simple keyword searching algorithm, that works even if spelled incorrectly.

Made by Isfar Tausif Rhyme.

---
## Example:
Making a new **RhymeSearch** object and assigning it to **RhymeSearchObj** variable.

    var RhymeSearchObj = new RhymeSearch()

Assigning the searchable items as a list in the **SearchableItems** variable (only takes list and list items have to be string) of the **RhymeSearchObj** object.

    RhymeSearchObj.SearchableItems = ["Rhyme", "Apple", "Search", "RhymeSearch!!", "Orange"]

Searching a keyword by using the **sortedSearch()** function (only takes string as argument) of the **RhymeSearchObj** object.

    console.log(RhymeSearchObj.sortedSearch("RymeSrch"))

The **sortedSearch()** function returns a list sorted by **Most to least** matching.
    
    ["RhymeSearch!!", "Search", "Rhyme", "Orange", "Apple"]

---
Searching a keyword by using the **search()** function (only takes string as argument) of the **RhymeSearchObj** object.

    console.log(RhymeSearchObj.search("RymeSrch"))

The **search()** function returns a **Object** with searchable items as key and **matching points** (`+1` for per character match, `+2` for per word match) as value.
    
    {Rhyme: 6, Apple: 1, Search: 6, RhymeSearch!!: 8, Orange: 3}