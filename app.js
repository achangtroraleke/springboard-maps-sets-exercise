/*
Q1 What does the following code return?

new Set([1,1,2,2,3,4])

Answer:
{1,2,3,4}
*/

/*
Q2 What does the following code return?

[...new Set("referee")].join("")

Answer:
returns 'ref'
*/

/*
Q3 What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

Answer:
{
    [1,2,3], true;
    [1,2,3], false
}
*/

/*
Q4 hasDuplicate
Write a function called hasDuplicate which accepts an array and returns otrue or false if that array contains a duplicate
*/

// Answer:
const hasDuplicate =  (array) =>{
    return new Set(array).size !== array.length
}

/*
Q5 Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
*/

// Answer
const vowelCount = (word) =>{
    let wordMap = new Map();
    const vowels = new Set([...'aeiou']);
    let wordList = [...word];
    let onlyVowels = wordList.filter((letter)=>vowels.has(letter))
    let wordSet = new Set(onlyVowels)
    wordSet.forEach((vowel)=>{
        wordMap.set(vowel, onlyVowels.filter((letter)=>vowel === letter).length)
    })
    return wordMap
}