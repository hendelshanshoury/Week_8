

var quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“Be the change that you wish to see in the world.”",
  "“In three words I can sum up everything I've learned about life: it goes on.”",
  "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
  "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
  "“A friend is someone who knows all about you and still loves you.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”",
  "“Always forgive your enemies; nothing annoys them so much.”",
];
    
    document.getElementById('btn').onclick = function getNewQuote(){
    var randomQuotes =Math.floor(Math.random() * quotes.length );
    var  newQuote=  document.getElementById('newquote');
    newQuote.innerHTML =quotes[randomQuotes];
    quotes.splice(randomQuotes  , 1);
  }
  console.log(Math.random());


