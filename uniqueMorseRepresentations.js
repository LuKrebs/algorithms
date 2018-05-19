// Problem description
// https://leetcode.com/problems/unique-morse-code-words/description/

const morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var uniqueMorseRepresentations = words => {
  finalWordsInMorseCode = [];

  words.map(word => {
    let wordToArray = word.split('');
    let wordToMorseCode = '';

    wordToArray.map(letter => {
      let indexOfLetter = alphabet.indexOf(letter);
      wordToMorseCode += morseCode[indexOfLetter];
    });

    finalWordsInMorseCode.push(wordToMorseCode);
    wordToMorseCode = '';
  });

  return (new Set(finalWordsInMorseCode).size);
};