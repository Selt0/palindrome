//reverse a string
function reverse(string) {
  //simple reverse string
  //return string.split("").reverse().join("");

  //to include emojis or other crazy characters
  return Array.from(string).reverse().join("");
}

//function to detect palindrome, not case sensitive
function palindrome(string) {
  let original = string.toLowerCase();
  return original === reverse(original);
}

//separates user email and domain
function emailParts(string) {
  //create an array including the characters
//  let email = Array.from(string);
//   //loop through array until '@' is found.
//   for (let i = 0; i < email.length; i++) {
//     if (email[i] === '@') {
//       //slice starting from '@' location.
//      let domain =  email.slice(i + 1).join("");
//      let username = email.slice(0, i).join("");
//      console.log(`Your user name is ${username}. The domain for the email address is ${domain}.`)
//     }
//   }
  //print out  username and domain.
  let email = string.toLowerCase().split("@");
  console.log(`your username is ${email[0]} and the domain is ${email[1]}.`);
  return email;
}

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
  this.processor = function(string) {
    string.toLowerCase();
  }

  //method to return processed content 
  this.processedContent = function() {
    return this.processor(this.content);
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
