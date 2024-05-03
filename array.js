let quote = "Why did the programmer quit his job?";
let ans = "Because he didn't get arrays";

// let arrQuote = document.getElementById('array');
// arrQuote.innerHTML = quote + " " + ans;
document.getElementById('array').innerHTML = quote + " " + ans;

let arr = ['Rahim', 'Karim', 'Abdul', 'Jabbar', 'Rahman'];
console.log(arr);

//check the item 
let check = arr.includes('Rahim');
console.log(check);
check = arr.includes('Basir');
console.log(check);

let guestName = prompt("Enter the guest name : ");
let isGuest = arr.includes(guestName);
if (isGuest == true) {
  alert("Welcome, " + guestName);
} else {
  alert("Sorry, " + guestName + " , next time.");
}