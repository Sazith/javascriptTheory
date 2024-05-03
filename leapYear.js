var year = prompt("Enter the year : ");
let result=""
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            result = "leap year";
        }
        else {
            result = "Not leap year";
        }
    }
    else {
        result = "leap year";
    }
} else {
    result = "Not leap year";
}
document.getElementById("leap").innerHTML = result;