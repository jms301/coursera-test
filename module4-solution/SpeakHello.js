(function (window) {

var speakWord = "Hello";
var helloSpeaker = {};

helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

//export helloSpeaker;
// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
  window.helloSpeaker = helloSpeaker;
})(window);
