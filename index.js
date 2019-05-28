const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// map() takes 2 arguments--a callback and the optional context.
// The callback runs for each value in an array and returns each new value in the resulting array.
// It returns a new array that is the same length as the original array and saves time while making
// the code simpler and easy to read.

const titleCased = () => {
  return tutorials.map(function(element) {
    //take each element in the array and split ' '
    element = element.split(' ')
    for (let i = 0; i < element.length; i++) {
      //for each element first letter is upper case + the rest of the letters minus the first
      element[i] = element[i].charAt(0).toUpperCase() + element[i].slice(1);
      //"what" becomes "W + hat"
    }
    return element.join(' ')
  })
}
