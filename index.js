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

  //method to return processed content for testing
  this.processedContent = function() {
    return this.letters().toLowerCase();
  }

  //method that returns only letters
  this.letters = function() {
    const lettersRegEx = /[a-z]/gi;
    return (this.content.match(lettersRegEx) || []).join("");
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
