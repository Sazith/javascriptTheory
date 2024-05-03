var tweet = prompt("Write your message : ");
var tweetLength = tweet.length;
var remainning = 180 - tweetLength;
alert("You have written " + tweetLength + " character , remaining is " + remainning +" character");

var name = prompt("Enter Your name : ");
var nameLength = name.length;
// var firstLetter = name.slice(0,1).toUpperCase();
// var remaining = name.slice(1,nameLength).toLowerCase();
// alert("Hello , "+ firstLetter + remaining);
alert("Hello , " + name.slice(0,1).toUpperCase() + name.slice(1,nameLength).toLowerCase());

var radomNum = (Math.random()*100)+1;
alert(Math.floor(radomNum));