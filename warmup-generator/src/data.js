// const warmupsData = [
//   {
//     heading: 'Mumble',
//     instructions: ['Create `mumble` function that does the following:'],
//     examples: ["mumble('X'); //=> 'X'", "mumble('abc'); //=> 'a-bb-ccc'", "mumble('kasun'); //=> 'k-aa-sss-uuuu-nnnnn'", "mumble('121'); //=> '1-22-111'", "mumble('!A 2'); //=> '!-AA-   -2222'"],
//     language: 'Try solving in JavaScript first!'
//   },
//   {
//     heading: 'Character Counter',
//     instructions: ["Write a function named `charCount` that accepts a single string argument and returns an object that represents the count of each character in the string.", "The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.å", "Upper and lower case characters should be counted separately.", "Space characters should be counted too."],
//     examples: ["charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }", "charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }"],
//     language: 'Try solving in JavaScript first!'
//   },
//   {
//     heading: 'Balanced Brackets',
//     instructions: ["Write a function called balancedBrackets that accepts a single string as argument.", "The input string is composed entirely of parentheses, brackets and/or curly braces, i.e., (), [] and/or {}. Referred to as 'braces' from this point forward... The balancedBraces function should return true if the string's braces are 'balanced' and false if they are not.", "The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them."],
//     examples: ["balancedBrackets( '()' ) // => true", "balancedBrackets( '(]' ) // => false", "balancedBrackets( '[{}]' ) // => true", "balancedBrackets( '[(])' ) // => false", "balancedBrackets( '[({}[])]' ) // => true", "balancedBrackets( '[({}[])}' ) // => false"],
//     language: 'Try solving in JavaScript first!'
//   },
//   {
//     heading: 'Caesar Cipher',
//     instructions: ['Write a program to decode this message:', 'FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.', 'This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.', 'The alphabet is normally: ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'The alphabet with the shift parameter of 3 is now as follows: DEFGHIJKLMNOPQRSTUVWXYZABC'],
//     examples: [],
//     language: 'Try solving in JavaScript first!'
//   },
//   {
//     heading: 'Proximity',
//     instructions: ['You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in the city, but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way for us to get data from a service. But now you want to build an App to help people decide what to find in the city.', 'You are given the following set of data (locations in all within the Melbourne CBD) as a result from an API request and you want to sort those results in terms of proximity to your starting location (General Assembly Melbourne campus).', 'var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}', "var results = [{name: 'Melbourne Cricket Grounds', location: {lat: -37.819967, long: 144.983449}}, {name: 'Flagstaff Gardens', location: {lat: -37.810680, long: 144.954352}}, {name: 'Emporium Melbourne', location: {lat: -37.812433, long: 144.963787}}, {name: 'City Library', location: {lat: -37.817039, long: 144.965983}}, {name: 'Southern Cross Station', location: {lat: -37.818281, long: 144.952776}}, {name: 'Sea Life Melbourne Aquarium', location: {lat: -37.820640, long: 144.958325}}]", 'Write a function in JS to print the names of the results in order of closest to your location to furthest away.'],
//     examples: [],
//     language: 'Try solving in JavaScript first!'
//   },
//   {
//     heading: 'Subset',
//     instructions: ["Write a function subset(object, properties) that takes a JavaScript Object and a list of properties and returns a new object that contains only the requested properties.", "For example, `subset({a: 1, b: 2, c: 3}, ['a', 'c']);` returns `{a: 1, c: 3}`", "Use the example cat object at the following link to test your method:", "https://gist.github.com/kasun-maldeni/029a6b80f948509d6fe3a6e1d343335b"],
//     examples: [],
//     language: 'Try solving in JavaScript first!'
//   }
// ]

const warmupsData = [
  {
    heading: 'Mumble',
    instructions: 'https://gist.github.com/kasun-maldeni/f9c7996a55256b0ff4412f70bd6e7546',
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Character Counter',
    instructions: 'https://gist.github.com/kasun-maldeni/691e04e66cd3c850f5f4c0e99ec197d2',
    time: 'Less than 30 minutes',
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Balanced Brackets',
    instructions: 'https://gist.github.com/kasun-maldeni/84d6d04207f18463be224e0f0ed0e382',
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Caesar Cipher',
    instructions: 'https://gist.github.com/kasun-maldeni/62a0b5f2570398274f26b30d7465551a',
    time: 'Less than 30 minutes',
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Proximity',
    instructions: 'https://gist.github.com/kasun-maldeni/1a3a65b1a2c8019fb1a4cf367ada4870',
    time: 'Less than 40 minutes',
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Subset',
    instructions: 'https://gist.github.com/kasun-maldeni/029a6b80f948509d6fe3a6e1d343335b',
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Alternating Split',
    instructions: 'https://gist.github.com/kasun-maldeni/3082b440f8c1753bf2f90171c3472206', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
  heading: 'Roman Numerals',
  instructions: 'https://gist.github.com/kasun-maldeni/a95dd12bf451a715f343e3780304ce87', 
  time: 'Less than 45 minutes',
  language: 'Try solving in JavaScript first!',
  },
  {
  heading: 'Scrabble Score',
  instructions: 'https://gist.github.com/kasun-maldeni/8a1658f0e62bb57c46954ddec74c581a', 
  time: 'Less than 20 minutes',
  language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Odd Integer',
    instructions: 'https://gist.github.com/kasun-maldeni/919b2d75fe2d41c563c826ff1616bbf7', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Say in English',
    instructions: 'https://gist.github.com/kasun-maldeni/94fb02b4ac9500a8c6925f0ef7c97d2e', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Array to Object',
    instructions: 'https://gist.github.com/kasun-maldeni/452d3c4cb2fed5c4eade00233c106e07', 
    time: 'Less than 30 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Fancy Phone Numbers',
    instructions: 'https://gist.github.com/kasun-maldeni/a74a93494bd92420833b208f2de4f243', 
    time: 'Less than 30 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Stock in Locations',
    instructions: 'https://gist.github.com/kasun-maldeni/0789915a1df2b0f0b48e0625d13f0464', 
    time: 'Less than 20 minutes',
    language: 'This is a SQL problem!',
  },
  {
    heading: 'Switch Up',
    instructions: 'https://gist.github.com/kasun-maldeni/98e3725a7c8258093ee69e2e5808ac7e', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Roll the Dice',
    instructions: 'https://gist.github.com/kasun-maldeni/6211bea7f198f2f5f8f537c2362854b0', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'AJAX request',
    instructions: 'https://gist.github.com/kasun-maldeni/e728273ff2c20c857ad7901a135a20c8', 
    time: 'Less than 30 minutes',
    language: '',
  },
  {
    heading: 'Treasure Hunter',
    instructions: 'https://gist.github.com/kasun-maldeni/8f6a98bb2ee51318b64596069409474a', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Weigh Up',
    instructions: 'https://gist.github.com/kasun-maldeni/5ff631ee1938c55bc7baa6cc2d141e1c', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'toCamelCase',
    instructions: 'https://gist.github.com/kasun-maldeni/8c79cceda10e6eaf6ee42086896f837d', 
    time: 'Less than 40 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Query String to Params Hash',
    instructions: 'https://gist.github.com/kasun-maldeni/fa236db071c77a28dd625c71e5614f4d', 
    time: 'Less than 30 minutes',
    language: 'Try solving in Ruby first!',
  },
  {
    heading: 'Starbucks',
    instructions: 'https://gist.github.com/kasun-maldeni/5ed738929d2145d3e153bd728d273e98', 
    time: 'Less than 20 minutes',
    language: 'Try solving in Ruby first!',
  },
  {
    heading: 'Deaf Grandma',
    instructions: 'https://gist.github.com/kasun-maldeni/7a6e478e8bb19d6e0bd15d0618b1045d', 
    time: 'Less than 25 minutes',
    language: 'Try solving in Ruby first!',
  },
  {
    heading: 'Ruby Squares',
    instructions: 'https://gist.github.com/kasun-maldeni/51626fb1920dc1c4786c615cb0e0db39', 
    time: 'Less than 20 minutes',
    language: 'Try solving in Ruby first!',
  },
  {
    heading: 'Vowel Count',
    instructions: 'https://gist.github.com/kasun-maldeni/e43aae163bc2abc4b7922803a9330beb', 
    time: 'Less than 20 minutes',
    language: 'Try solving in Ruby first!',
  },
  {
    heading: 'Fake Map',
    instructions: 'https://gist.github.com/kasun-maldeni/a54a21c56ac930d8069e191c2af7cb80', 
    time: 'Less than 20 minutes',
    language: 'Try solving in Ruby first!',
  },
  {
    heading: 'Count the Apples',
    instructions: 'https://gist.github.com/kasun-maldeni/4bdc41709ca553d6bcb86f9688e7cfe0', 
    time: 'Less than 20 minutes',
    language: 'Try solving in Ruby first!',
  },
  {
    heading: 'DanChat',
    instructions: 'https://gist.github.com/kasun-maldeni/ea096d2e11888357beb23205bad7eb14', 
    time: 'Less than 20 minutes',
    language: 'Try solving in Ruby first!',
  },
  {
    heading: 'Shopping',
    instructions: 'https://gist.github.com/kasun-maldeni/50867e62d3e91fe1fdade3a3ebe96c70', 
    time: 'Less than 20 minutes',
    language: 'Try solving in Ruby first!',
  },
  {
    heading: 'The Board',
    instructions: 'https://gist.github.com/kasun-maldeni/ad686ac676eb0760256a28dd607234a6', 
    time: 'Less than 30 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Make Them Red',
    instructions: 'https://gist.github.com/kasun-maldeni/0235652cc9ad647dc2d9c1e27cc5b8db', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Make This Page',
    instructions: 'https://gist.github.com/kasun-maldeni/c5f20ac3f7b44a142eba030b624df4f9', 
    time: 'Less than 45 minutes',
    language: 'You will need to use HTML and CSS for this one!',
  },
  {
    heading: 'Mini Golf',
    instructions: 'https://gist.github.com/kasun-maldeni/2d95088741be3867b86676d48464bbdb', 
    time: 'Less than 25 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Startup Generator',
    instructions: 'https://gist.github.com/kasun-maldeni/7e54cf6d8a03b77c86dffbf68dc8d2d8', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Vegetables and Fruits',
    instructions: 'https://gist.github.com/kasun-maldeni/2e6b12ef570c917c902dbf035f45b9a9', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'Show Me The Chorus',
    instructions: 'https://gist.github.com/kasun-maldeni/e9dd9afd217b239050b9d9a3231addfc', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
  {
    heading: 'What Year Is It?',
    instructions: 'https://gist.github.com/kasun-maldeni/50d1c262742fbd40e53dfbe1f1530299', 
    time: 'Less than 20 minutes',
    language: 'Try solving in JavaScript first!',
  },
]

// {
//   heading: ,
//   instructions: , 
//   time: 
//   language: ,
// }

export default warmupsData