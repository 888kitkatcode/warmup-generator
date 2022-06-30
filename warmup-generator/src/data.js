const warmupsData = [
  {
    heading: 'Mumble',
    instructions: ['Create `mumble` function that does the following:'],
    examples: ["mumble('X'); //=> 'X'", "mumble('abc'); //=> 'a-bb-ccc'", "mumble('kasun'); //=> 'k-aa-sss-uuuu-nnnnn'", "mumble('121'); //=> '1-22-111'", "mumble('!A 2'); //=> '!-AA-   -2222'"],
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Character Counter',
    instructions: ["Write a function named `charCount` that accepts a single string argument and returns an object that represents the count of each character in the string.", "The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.å", "Upper and lower case characters should be counted separately.", "Space characters should be counted too."],
    examples: ["charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }", "charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }"],
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Balanced Brackets',
    instructions: ["Write a function called balancedBrackets that accepts a single string as argument.", "The input string is composed entirely of parentheses, brackets and/or curly braces, i.e., (), [] and/or {}. Referred to as 'braces' from this point forward... The balancedBraces function should return true if the string's braces are 'balanced' and false if they are not.", "The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them."],
    examples: ["balancedBrackets( '()' ) // => true", "balancedBrackets( '(]' ) // => false", "balancedBrackets( '[{}]' ) // => true", "balancedBrackets( '[(])' ) // => false", "balancedBrackets( '[({}[])]' ) // => true", "balancedBrackets( '[({}[])}' ) // => false"],
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Caesar Cipher',
    instructions: ['Write a program to decode this message:', 'FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.', 'This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.', 'The alphabet is normally: ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'The alphabet with the shift parameter of 3 is now as follows: DEFGHIJKLMNOPQRSTUVWXYZABC'],
    examples: [],
    language: 'Try solving in JavaScript first!'
  },
  {
    heading: 'Proximity',
    instructions: ['You and some friends usually play a gathering game (like a scavenger hunt) using geo-coordinates in the city, but it has gotten so popular that many people want to join in. One of your friends created an API. An API is a way for us to get data from a service. But now you want to build an App to help people decide what to find in the city.', 'You are given the following set of data (locations in all within the Melbourne CBD) as a result from an API request and you want to sort those results in terms of proximity to your starting location (General Assembly Melbourne campus).', 'var startPoint = {name: "General Assembly", location: {lat: -37.818555, long: 144.959076}}', "var results = [{name: 'Melbourne Cricket Grounds', location: {lat: -37.819967, long: 144.983449}}, {name: 'Flagstaff Gardens', location: {lat: -37.810680, long: 144.954352}}, {name: 'Emporium Melbourne', location: {lat: -37.812433, long: 144.963787}}, {name: 'City Library', location: {lat: -37.817039, long: 144.965983}}, {name: 'Southern Cross Station', location: {lat: -37.818281, long: 144.952776}}, {name: 'Sea Life Melbourne Aquarium', location: {lat: -37.820640, long: 144.958325}}]", 'Write a function in JS to print the names of the results in order of closest to your location to furthest away.'],
    examples: [],
    language: 'Try solving in JavaScript first!'
  },
  // {
  //   heading: 'Subset',
  //   instructions: ["Write a function subset(object, properties) that takes a JavaScript Object and a list of properties and returns a new object that contains only the requested properties.", "For example, subset({a: 1, b: 2, c: 3}, ['a', 'c']); returns {a: 1, c: 3}", "Use the example cat object below to test your method.", "const catGif =", {
  //       'type': 'gif',
  //       'id': 'BzyTuYCmvSORqs1ABM',
  //       'url': 'https://giphy.com/gifs/hallmarkecards-cute-hallmark-shoebox-BzyTuYCmvSORqs1ABM',
  //       'slug': 'hallmarkecards-cute-hallmark-shoebox-BzyTuYCmvSORqs1ABM',
  //       'bitly_gif_url': 'https://gph.is/2zyojNq',
  //       'bitly_url': 'https://gph.is/2zyojNq',
  //       'embed_url': 'https://giphy.com/embed/BzyTuYCmvSORqs1ABM',
  //       'username': '',
  //       'source': 'https://www.hallmark.com/shop-shoebox/?navMenuSubTitle=By\\%20Card\\%20Collection&navMenu=Main\\%20Menu&navTo=Shoebox&navLocation=Header&navMenuTitle=Cards',
  //       'title': 'Sci Fi Lol GIF by Hallmark Gold Crown',
  //       'rating': 'g',
  //       'content_url': '',
  //       'source_tld': 'www.hallmark.com',
  //       'source_post_url': 'https://www.hallmark.com/shop-shoebox/?navMenuSubTitle=By\\%20Card\\%20Collection&navMenu=Main\\%20Menu&navTo=Shoebox&navLocation=Header&navMenuTitle=Cards',
  //       'is_sticker': 0,
  //       'import_datetime': '2018-11-06 19:20:44',
  //       'trending_datetime': '2019-11-20 00:45:12',
  //       'images': {
  //           'original': {
  //               'height': '400',
  //               'width': '400',
  //               'size': '2195323',
  //               'url': 'https://media1.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif?cid=7af7174cmw6353eq900871wxznwqic34ezmlv842uhsogt1t&rid=giphy.gif&ct=g',
  //               'mp4_size': '707000',
  //               'mp4': 'https://media1.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.mp4?cid=7af7174cmw6353eq900871wxznwqic34ezmlv842uhsogt1t&rid=giphy.mp4&ct=g',
  //               'webp_size': '760446',
  //               'webp': 'https://media1.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.webp?cid=7af7174cmw6353eq900871wxznwqic34ezmlv842uhsogt1t&rid=giphy.webp&ct=g',
  //               'frames': '25',
  //               'hash': 'ab8f173d61210eb85f1ea92526ae9e07'
  //           },
  //           'downsized': {
  //               'height': '400',
  //               'width': '400',
  //               'size': '1067376',
  //               'url': 'https://media1.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy-downsized.gif?cid=7af7174cmw6353eq900871wxznwqic34ezmlv842uhsogt1t&rid=giphy-downsized.gif&ct=g'
  //           },
  //       }
  //   }],
  //   examples: ["Revision notes (if you're stuck):", 'Remember the different ways to set and get keys from an object:', "let object = {a: 1, b: 2}", "console.log(object.a) // 1","console.log(object.b): // 2", "console.log(object['a']); // 1", "console.log(object['b']); // 2", "object['c'] = 3", "console.log(object.c); // 3", "console.log(object['c']); // 3", "console.log(object); // { a: 1, b: 2, c: 3 }", "let letters = ['a', 'b', 'c'];", "let newThing = {};", "for(let i = 0; i < letters.length; i++){newThing[letters[i]] = i + 1;}", "console.log(newThing); // { a: 1, b: 2, c: 3 }"],
  //   language: 'Try solving in JavaScript first!'
  // }
]

export default warmupsData