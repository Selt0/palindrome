This is a sample NPM module created by Michael M.

This module can be used as follows: 

```
$ npm install --global selt0-palindrome
$ vim test.js

let Phrase = require("selt0-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true

```