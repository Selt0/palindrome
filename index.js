module.exports = Phrase;
//extending built-in prototypes

//reverse method added to String.prototype. Reverses the string
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

//blank method to String.prototype. Test to see if string is blank, only spaces, new lines, etc.
String.prototype.blank = function() {
  return /^\s*$/.test(this);
}

//lastItem method to Array.prototype. Selects the last element itself
Array.prototype.lastItem = function() {
  return this.slice(-1)[0];
}

//Defines a Phrase object
function Phrase(content) {
  this.content = content;

  //method toLowerCase()
  this.processor = function() {
    return this.letters().toLowerCase();
  }

  //method to return processed content 
  this.processedContent = function() {
    return this.processor(this.content);
  }

  //method that returns only letters
  this.letters = function() {
    let theLetters = [];
    for (let i = 0; i < this.content.length; i++) {
      let character = this.content.charAt(i);
      if (character.match(/[a-zA-Z]/)) {
        theLetters.push(character);
      }
    }
    return theLetters.join("");
  }

  //method to detect palindrome
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  //method to make a phrase all-caps
  this.louder = function louder() {
    return this.content.toUpperCase();
  }
}

//Defines TranslatedPhrase object
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  //return translation processed for palindrome
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

//inheritance
//allows TranslatedPhrase() to inherit the methods in Phrase()
TranslatedPhrase.prototype = new Phrase();
