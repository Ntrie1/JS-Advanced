function wordsUpperCase(words){
    // const regex = /[A-z0-9]+/g;

  console.log(words.match(/[A-z0-9]+/g).join(', ').toUpperCase());



} wordsUpperCase('Hi, how are you?')